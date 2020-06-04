-- Table: public.users_categories

-- DROP TABLE public.users_categories;

CREATE TABLE public.users_categories
(
    id integer NOT NULL DEFAULT nextval('users_catergories_id_seq'::regclass),
    user_id text COLLATE pg_catalog."default",
    category_id text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_categories
    OWNER to "trollo-user";