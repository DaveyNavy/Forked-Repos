export function addToken(req, res, next) {
  const header = req.headers["authorization"];
  if (header) {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}
