-- Table: public.users_passwords

-- DROP TABLE public.users_passwords;

-- table linking users to their account password

CREATE TABLE public.users_passwords
(
    user_id text COLLATE pg_catalog."default" NOT NULL,
    password_id text COLLATE pg_catalog."default" NOT NULL,
    id integer NOT NULL DEFAULT nextval('users_passwords_id_seq1'::regclass)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_passwords
    OWNER to postgres;