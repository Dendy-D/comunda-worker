CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    block VARCHAR(255) NOT NULL,
    CA BOOLEAN NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Head_of_department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Document_sign_matrix (
    id SERIAL PRIMARY KEY,
    document_type VARCHAR(255) NOT NULL,
    assignee_position VARCHAR(255) NOT NULL,
    assignee_department VARCHAR(255) NOT NULL,
    approver_position VARCHAR(255) NOT NULL,
    approver_department VARCHAR(255) NOT NULL
);

INSERT INTO "Document_sign_matrix" (document_type, assignee_position, assignee_department, approver_position, approver_department, "createdAt", "updatedAt") 
VALUES 
('Договор аренды', 'Директор по стратегии и инновациям', 'Руководство ЦА Freedom Telecom', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Договор аренды', 'Системный аналитик', 'Отдел организационного развития', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Договор аренды', 'Руководитель отдела', 'Отдел организационного развития', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Договор поставки оборудования', 'Директор по стратегии и инновациям', 'Руководство ЦА Freedom Telecom', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Договор поставки оборудования', 'Системный аналитик', 'Отдел организационного развития', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)

INSERT INTO "User" (name, position, department, block, "CA", email, "createdAt", "updatedAt") 
VALUES
('Даржанов Жанбек', 'Главный бизнес аналитик', 'Отдел организационного развития', 'Блок стратегии и иновации', true, 'testEmail111110@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Баталов Олег', 'Руководитель отдела', 'Отдел организационного развития', 'Блок стратегии и иновации', true, 'testEmail111111@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Минкевич Владислав', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', 'Блок стратегии и иновации', true, 'testEmail111112@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Айтжанов Кемел', 'Директор по стратегии и инновациям', 'Руководство ЦА Freedom Telecom', 'Блок стратегии и иновации', true, 'testEmail111113@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Горчаков Павел', 'Системный аналитик', 'Отдел организационного развития', 'Блок стратегии и иновации', true, 'testEmail111114@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)


INSERT INTO "Employee" (name, position, department, email, "createdAt", "updatedAt") 
VALUES
('Даржанов Жанбек', 'Главный бизнес аналитик', 'Отдел организационного развития', 'testEmail111110@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Баталов Олег', 'Руководитель отдела', 'Отдел организационного развития', 'testEmail111111@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Горчаков Павел', 'Системный аналитик', 'Отдел организационного развития', 'testEmail111114@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Daniel', 'Fullstack разработчик', 'Отдел организационного развития', 'daniilvasilenko2@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Марк Аналитиков', 'Бизнес аналитик', 'Отдел продаж', 'uncouth-mar2@maildrop.cc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)


INSERT INTO "Head_of_department" (name, position, department, email, "createdAt", "updatedAt") 
VALUES
('Андрей Директоров', 'Руководитель отдела', 'Отдел продаж', 'uncouth-mar3@maildrop.cc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Василий Боссов', 'Руководитель отдела', 'Отдел организационного развития', 'uncouth-mar1@maildrop.cc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Минкевич Владислав', 'Генеральный директор', 'Руководство ЦА Freedom Telecom', 'testEmail111112@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Айтжанов Кемел', 'Директор по стратегии и инновациям', 'Руководство ЦА Freedom Telecom', 'testEmail111113@mail.ru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Николай Эйчаров', 'Руководитель отдела', 'Отдел кадров', 'uncouth-mar0@maildrop.cc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
