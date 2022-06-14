create TABLE driver_license(
    id_driver_license SERIAL PRIMARY KEY,
    document_series INTEGER CHECK (document_series = 4),
    document_number INTEGER CHECK (document_number = 6),
    сity_of_receipt VARCHAR(32),
    effective_date VARCHAR(10),
    end_data VARCHAR(10),
    department_code INTEGER
);

-- INSERT INTO driver_license (document_series,document_number,сity_of_receipt,effective_date,end_date,department_code)VALUES(9232,208643,'Tyumen','01.01.1970','01.01.1990',4723);
create TABLE driver(
    id_driver SERIAL PRIMARY KEY,
    id_driver_license INTEGER,
    first_name VARCHAR(64),
    second_name VARCHAR(64),
    patronymic VARCHAR(64),
    birthday VARCHAR(10),
    FOREIGN KEY(id_driver_license) REFERENCES driver_license (id_driver_license)
);

-- INSERT INTO driver (id_driver_license, first_name, second_name,patronymic, birthday) VALUES (19, 'Иван', 'Иванович', 'Иванов', '01.01.1950');
create TABLE registration_number(
    id_registration_number SERIAL PRIMARY KEY,
    registration_number VARCHAR(6),
    registration_region VARCHAR(3)
);

-- INSERT INTO registration_number (registration_number, registration_region) VALUES ('Н564АУ', '72');
create TABLE vehicle(
    id_vehicle SERIAL PRIMARY KEY,
    id_registration_number INTEGER,
    VIN VARCHAR(17),
    brand VARCHAR(255),
,
    model VARCHAR(255),
    color VARCHAR(255),
    FOREIGN KEY(id_registration_number) REFERENCES registration_number (id_registration_number)
);

-- INSERT INTO vehicle (id_registration_number, VIN, brand, model, color) VALUES (1, 'XTA210990Y2766389', 'LADA', '21190', 'Синий');
create TABLE insurance(
    id_insurance SERIAL PRIMARY KEY,
    id_vehicle INTEGER,
    id_driver INTEGER,
    document_series VARCHAR(3),
    document_number VARCHAR(10),
    policyholder VARCHAR(255),
    effective_date VARCHAR(10),
    end_data VARCHAR(10),
    amount INTEGER,
    FOREIGN KEY(id_driver) REFERENCES driver (id_driver),
    FOREIGN KEY(id_vehicle) REFERENCES vehicle (id_vehicle)
);

-- INSERT INTO insurance (id_vehicle, id_driver, document_series, document_number, policyholder,effective_date, end_data, amount) VALUES (1, 19, 'OXD', '5847348547', 'ОСАГО', '01.01.1970', '01.01.1970', 20000);
create TABLE penalty(
    id_penalty SERIAL PRIMARY KEY,
    id_driver_license INTEGER,
    id_vehicle INTEGER,
    violation text,
    penalty_location VARCHAR(255),
    penalty_date VARCHAR(255),
    amount INTEGER,
    FOREIGN KEY(id_vehicle) REFERENCES vehicle (id_vehicle),
    FOREIGN KEY(id_driver_license) REFERENCES driver_license (id_driver_license)
);

-- INSERT INTO penalty (id_driver_license, id_vehicle, violation, penalty_location, penalty_date, amount) VALUES (19, 1, 'Штраф за проезд на красный свет', 'г. Москва', '01.01.1970', 2000);
SELECT
    *
FROM
    driver_license FULL
    JOIN driver ON driver_license.id_driver_license = driver.id_driver_license FULL
    JOIN insurance ON driver.id_driver = insurance.id_driver;
    JOIN vehicle ON vehicle.id_vehicle = insurance.id_vehicle;