-- Table: public.users

-- DROP TABLE public.users;

-- users list

CREATE TABLE public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    public_id text COLLATE pg_catalog."default" NOT NULL,
    login text COLLATE pg_catalog."default",
    active boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT users_login_key UNIQUE (login)
,
    CONSTRAINT users_public_id_key UNIQUE (public_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;