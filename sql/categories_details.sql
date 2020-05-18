-- Table: public.categories_details

-- DROP TABLE public.categories_details;

-- more detialed information about a category

CREATE TABLE public.categories_details
(
    id integer NOT NULL DEFAULT nextval('categories_details_id_seq'::regclass),
    category_id text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    color text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.categories_details
    OWNER to postgres;