-- Table: public.expenses_details

-- DROP TABLE public.expenses_details;

CREATE TABLE public.expenses_details
(
    id integer NOT NULL DEFAULT nextval('expenses_details_id_seq'::regclass),
    expense_id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.expenses_details
    OWNER to "trollo-user";