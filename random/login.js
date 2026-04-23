const http = require("http");
const url = require("url");

const users = [
  { email: "user@example.com", password: "password123" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  // CORS headers (for React dev server)
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (parsedUrl.pathname === "/login" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const { email, password } = JSON.parse(body);

        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true, message: "Logged in" }));
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ success: false, message: "Invalid credentials" })
          );
        }
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ success: false, message: "Invalid JSON" })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Node login server running on http://localhost:${port}`);
});

