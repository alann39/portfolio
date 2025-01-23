from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os
from urllib.parse import parse_qs
import cgi

class RequestHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/messages':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            message_data = json.loads(post_data.decode('utf-8'))

            # Validate required fields
            if not all(key in message_data for key in ['name', 'email', 'message']):
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'All fields are required'}).encode())
                return

            try:
                # Ensure data directory exists
                os.makedirs('data', exist_ok=True)
                
                # Read existing messages
                messages_file = 'data/messages.json'
                if os.path.exists(messages_file):
                    with open(messages_file, 'r') as f:
                        data = json.load(f)
                else:
                    data = {'messages': []}

                # Add new message
                data['messages'].append(message_data)

                # Write updated messages
                with open(messages_file, 'w') as f:
                    json.dump(data, f, indent=2)

                # Send success response
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'message': 'Message saved successfully'}).encode())
            except Exception as e:
                print(f"Error: {e}")
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Failed to save message'}).encode())
        else:
            super().do_POST()

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        SimpleHTTPRequestHandler.end_headers(self)

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

httpd = HTTPServer(('localhost', 8000), RequestHandler)
print("Server running at http://localhost:8000")
httpd.serve_forever()
