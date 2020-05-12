-- Table: public.expenses

-- DROP TABLE public.expenses;

CREATE TABLE public.expenses
(
    id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    "time" timestamp without time zone,
    amount integer,
    category integer,
    user_id integer,
    CONSTRAINT expenses_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.expenses
    OWNER to postgres;