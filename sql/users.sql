-- Table: public.users

-- username, password and information if user is active or not to indicate if it has been deleted

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    public_id text COLLATE pg_catalog."default" NOT NULL,
    login text COLLATE pg_catalog."default",
    active boolean DEFAULT true,
    password_hash text COLLATE pg_catalog."default" NOT NULL,
    password_salt text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_login_key UNIQUE (login)
,
    CONSTRAINT users_password_hash_key UNIQUE (password_hash)
,
    CONSTRAINT users_password_salt_key UNIQUE (password_salt)
,
    CONSTRAINT users_public_id_key UNIQUE (public_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;