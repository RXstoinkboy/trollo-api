-- Table: public.categories

-- DROP TABLE public.categories;

-- list of categories created by users

CREATE TABLE public.categories
(
    id integer NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    public_id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categories_public_id_key UNIQUE (public_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.categories
    OWNER to postgres;