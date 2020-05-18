-- Table: public.users_details

-- table used to store more detailed data about a user

-- DROP TABLE public.users_details;

CREATE TABLE public.users_details
(
    id integer NOT NULL DEFAULT nextval('users_details_id_seq'::regclass),
    user_id text COLLATE pg_catalog."default" NOT NULL,
    active boolean NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    CONSTRAINT users_details_user_id_key UNIQUE (user_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users_details
    OWNER to postgres;