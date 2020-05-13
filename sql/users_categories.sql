-- Table: public.users_catergories

-- DROP TABLE public.users_catergories;

-- table linking users to categories which have been created by them

CREATE TABLE public.users_catergories
(
    id integer NOT NULL DEFAULT nextval('users_catergories_id_seq'::regclass),
    user_id text COLLATE pg_catalog."default",
    category_id text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_catergories
    OWNER to postgres;