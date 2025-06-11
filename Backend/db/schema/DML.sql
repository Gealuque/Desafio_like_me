SELECT * FROM likeme;

INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *;