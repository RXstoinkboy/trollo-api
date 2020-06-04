-- Table: public.expenses

-- DROP TABLE public.expenses;

CREATE TABLE public.expenses
(
    id integer NOT NULL DEFAULT nextval('expenses_id_seq'::regclass),
    public_id text COLLATE pg_catalog."default" NOT NULL,
    amount integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    CONSTRAINT expenses_public_id_key UNIQUE (public_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.expenses
    OWNER to "trollo-user";