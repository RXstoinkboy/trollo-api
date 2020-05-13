-- Table: public.users_expenses

-- DROP TABLE public.users_expenses;

-- table linking users to their expenses

CREATE TABLE public.users_expenses
(
    id integer NOT NULL DEFAULT nextval('users_expenses_id_seq'::regclass),
    user_id text COLLATE pg_catalog."default",
    expense_id text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_expenses
    OWNER to postgres;