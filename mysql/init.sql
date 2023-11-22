

-- create table 'user'
CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  gender ENUM('male', 'female', 'unknown') NOT NULL DEFAULT 'unknown',
  phone_number VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255) DEFAULT 'https://example.com/default-avatar.png',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  note TEXT
);

-- insert data
INSERT INTO user (first_name, last_name, email, password) VALUES
('John', 'Doe', 'johndoe1@example.com', 'password123'),
('Jane', 'Smith', 'janesmith@example.com', 'password123'),
('Alice', 'Johnson', 'alicejohnson@example.com', 'password123'),
('Bob', 'Brown', 'bobbrown@example.com', 'password123'),
('Carol', 'Davis', 'caroldavis@example.com', 'password123'),
('David', 'Miller', 'davidmiller@example.com', 'password123'),
('Eve', 'Wilson', 'evewilson@example.com', 'password123'),
('Frank', 'Moore', 'frankmoore@example.com', 'password123'),
('Grace', 'Taylor', 'gracetaylor@example.com', 'password123'),
('Henry', 'Anderson', 'henryanderson@example.com', 'password123'),
('Isabel', 'Thomas', 'isabelthomas@example.com', 'password123'),
('Jack', 'Jackson', 'jackjackson@example.com', 'password123'),
('Kathy', 'White', 'kathywhite@example.com', 'password123'),
('Louis', 'Harris', 'louisharris@example.com', 'password123'),
('Megan', 'Martin', 'meganmartin@example.com', 'password123'),
('Nathan', 'Garcia', 'nathangarcia@example.com', 'password123'),
('Olivia', 'Martinez', 'oliviamartinez@example.com', 'password123'),
('Paul', 'Robinson', 'paulrobinson@example.com', 'password123'),
('Quincy', 'Clark', 'quincyclark@example.com', 'password123'),
('Rachel', 'Rodriguez', 'rachelrodriguez@example.com', 'password123');


ALTER USER 'admin'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'admin';
FLUSH PRIVILEGES;