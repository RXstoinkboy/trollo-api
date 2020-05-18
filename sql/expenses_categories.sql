-- Table: public.expenses_categories

-- DROP TABLE public.expenses_categories;

-- table linking expense to a category

CREATE TABLE public.expenses_categories
(
    expense_id text COLLATE pg_catalog."default" NOT NULL,
    category_id text COLLATE pg_catalog."default" NOT NULL,
    id integer NOT NULL DEFAULT nextval('expenses_categories_id_seq'::regclass)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.expenses_categories
    OWNER to postgres;