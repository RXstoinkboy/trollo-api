-- Table: public.passwords

-- DROP TABLE public.passwords;

-- table containing users passwords

CREATE TABLE public.passwords
(
    id integer NOT NULL DEFAULT nextval('users_passwords_id_seq'::regclass),
    public_id text COLLATE pg_catalog."default" NOT NULL,
    password_hash text COLLATE pg_catalog."default" NOT NULL,
    password_salt text COLLATE pg_catalog."default" NOT NULL,
    updated_at timestamp without time zone,
    CONSTRAINT users_passwords_password_hash_key UNIQUE (password_hash)
,
    CONSTRAINT users_passwords_password_salt_key UNIQUE (password_salt)
,
    CONSTRAINT users_passwords_public_id_key UNIQUE (public_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.passwords
    OWNER to postgres;