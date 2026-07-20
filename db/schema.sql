--
-- PostgreSQL database dump
--

\restrict JUzj9FaP9XTJYj8vpfyhlOCm0k0tJJM28Pf0OhSrV8n8jIiasm8r2ZtaFmlK2L0

-- Dumped from database version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: _locales; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public._locales AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__industries_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__industries_v_published_locale AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__industries_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__industries_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__insights_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__insights_v_published_locale AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__insights_v_version_category; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__insights_v_version_category AS ENUM (
    'Budget',
    'NSSF',
    'Tax',
    'VAT',
    'Payroll',
    'Advisory',
    'Audit'
);


--
-- Name: enum__insights_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__insights_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__resources_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__resources_v_published_locale AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__resources_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__resources_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__sectors_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__sectors_v_published_locale AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__sectors_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__sectors_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__services_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__services_v_published_locale AS ENUM (
    'en',
    'ar',
    'fr'
);


--
-- Name: enum__services_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__services_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_industries_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_industries_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_insights_category; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_insights_category AS ENUM (
    'Budget',
    'NSSF',
    'Tax',
    'VAT',
    'Payroll',
    'Advisory',
    'Audit'
);


--
-- Name: enum_insights_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_insights_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_resources_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_resources_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_sectors_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_sectors_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_services_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_services_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_users_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_users_role AS ENUM (
    'admin',
    'editor'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _industries_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._industries_v (
    id integer NOT NULL,
    parent_id integer,
    version_slug character varying,
    version_image_id integer,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__industries_v_version_status DEFAULT 'draft'::public.enum__industries_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    snapshot boolean,
    published_locale public.enum__industries_v_published_locale,
    latest boolean
);


--
-- Name: _industries_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._industries_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _industries_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._industries_v_id_seq OWNED BY public._industries_v.id;


--
-- Name: _industries_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._industries_v_locales (
    version_title character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: _industries_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._industries_v_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _industries_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._industries_v_locales_id_seq OWNED BY public._industries_v_locales.id;


--
-- Name: _industries_v_version_considerations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._industries_v_version_considerations (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _industries_v_version_considerations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._industries_v_version_considerations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _industries_v_version_considerations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._industries_v_version_considerations_id_seq OWNED BY public._industries_v_version_considerations.id;


--
-- Name: _industries_v_version_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._industries_v_version_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _industries_v_version_intro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._industries_v_version_intro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _industries_v_version_intro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._industries_v_version_intro_id_seq OWNED BY public._industries_v_version_intro.id;


--
-- Name: _industries_v_version_offerings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._industries_v_version_offerings (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _industries_v_version_offerings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._industries_v_version_offerings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _industries_v_version_offerings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._industries_v_version_offerings_id_seq OWNED BY public._industries_v_version_offerings.id;


--
-- Name: _insights_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._insights_v (
    id integer NOT NULL,
    parent_id integer,
    version_slug character varying,
    version_category public.enum__insights_v_version_category,
    version_date timestamp(3) with time zone,
    version_cover_id integer,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__insights_v_version_status DEFAULT 'draft'::public.enum__insights_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    snapshot boolean,
    published_locale public.enum__insights_v_published_locale,
    latest boolean
);


--
-- Name: _insights_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._insights_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _insights_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._insights_v_id_seq OWNED BY public._insights_v.id;


--
-- Name: _insights_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._insights_v_locales (
    version_title character varying,
    version_excerpt character varying,
    version_body jsonb,
    version_seo_title character varying,
    version_seo_description character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: _insights_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._insights_v_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _insights_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._insights_v_locales_id_seq OWNED BY public._insights_v_locales.id;


--
-- Name: _resources_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v (
    id integer NOT NULL,
    parent_id integer,
    version_slug character varying,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__resources_v_version_status DEFAULT 'draft'::public.enum__resources_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    snapshot boolean,
    published_locale public.enum__resources_v_published_locale,
    latest boolean
);


--
-- Name: _resources_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_id_seq OWNED BY public._resources_v.id;


--
-- Name: _resources_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_locales (
    version_title character varying,
    version_category character varying,
    version_summary character varying,
    version_answer character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: _resources_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_locales_id_seq OWNED BY public._resources_v_locales.id;


--
-- Name: _resources_v_version_faq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_version_faq (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    q character varying,
    a character varying,
    _uuid character varying
);


--
-- Name: _resources_v_version_faq_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_version_faq_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_version_faq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_version_faq_id_seq OWNED BY public._resources_v_version_faq.id;


--
-- Name: _resources_v_version_sections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_version_sections (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    h character varying,
    note character varying,
    "table" jsonb,
    _uuid character varying
);


--
-- Name: _resources_v_version_sections_body; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_version_sections_body (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _resources_v_version_sections_body_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_version_sections_body_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_version_sections_body_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_version_sections_body_id_seq OWNED BY public._resources_v_version_sections_body.id;


--
-- Name: _resources_v_version_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_version_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_version_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_version_sections_id_seq OWNED BY public._resources_v_version_sections.id;


--
-- Name: _resources_v_version_sections_list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_version_sections_list (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _resources_v_version_sections_list_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_version_sections_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_version_sections_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_version_sections_list_id_seq OWNED BY public._resources_v_version_sections_list.id;


--
-- Name: _resources_v_version_sources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._resources_v_version_sources (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _resources_v_version_sources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._resources_v_version_sources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _resources_v_version_sources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._resources_v_version_sources_id_seq OWNED BY public._resources_v_version_sources.id;


--
-- Name: _sectors_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._sectors_v (
    id integer NOT NULL,
    parent_id integer,
    version_slug character varying,
    version_icon character varying,
    version_order numeric DEFAULT 0,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__sectors_v_version_status DEFAULT 'draft'::public.enum__sectors_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    snapshot boolean,
    published_locale public.enum__sectors_v_published_locale,
    latest boolean
);


--
-- Name: _sectors_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._sectors_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _sectors_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._sectors_v_id_seq OWNED BY public._sectors_v.id;


--
-- Name: _sectors_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._sectors_v_locales (
    version_title character varying,
    version_body character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: _sectors_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._sectors_v_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _sectors_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._sectors_v_locales_id_seq OWNED BY public._sectors_v_locales.id;


--
-- Name: _sectors_v_version_considerations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._sectors_v_version_considerations (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _sectors_v_version_considerations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._sectors_v_version_considerations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _sectors_v_version_considerations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._sectors_v_version_considerations_id_seq OWNED BY public._sectors_v_version_considerations.id;


--
-- Name: _sectors_v_version_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._sectors_v_version_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _sectors_v_version_intro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._sectors_v_version_intro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _sectors_v_version_intro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._sectors_v_version_intro_id_seq OWNED BY public._sectors_v_version_intro.id;


--
-- Name: _sectors_v_version_offerings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._sectors_v_version_offerings (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _sectors_v_version_offerings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._sectors_v_version_offerings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _sectors_v_version_offerings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._sectors_v_version_offerings_id_seq OWNED BY public._sectors_v_version_offerings.id;


--
-- Name: _services_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v (
    id integer NOT NULL,
    parent_id integer,
    version_slug character varying,
    version_icon character varying,
    version_order numeric DEFAULT 0,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__services_v_version_status DEFAULT 'draft'::public.enum__services_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    snapshot boolean,
    published_locale public.enum__services_v_published_locale,
    latest boolean
);


--
-- Name: _services_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_id_seq OWNED BY public._services_v.id;


--
-- Name: _services_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_locales (
    version_title character varying,
    version_tagline character varying,
    version_summary character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: _services_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_locales_id_seq OWNED BY public._services_v_locales.id;


--
-- Name: _services_v_version_deliverables; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_deliverables (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_deliverables_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_deliverables_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_deliverables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_deliverables_id_seq OWNED BY public._services_v_version_deliverables.id;


--
-- Name: _services_v_version_faq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_faq (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    q character varying,
    a character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_faq_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_faq_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_faq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_faq_id_seq OWNED BY public._services_v_version_faq.id;


--
-- Name: _services_v_version_for_who; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_for_who (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_for_who_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_for_who_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_for_who_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_for_who_id_seq OWNED BY public._services_v_version_for_who.id;


--
-- Name: _services_v_version_includes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_includes (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_includes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_includes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_includes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_includes_id_seq OWNED BY public._services_v_version_includes.id;


--
-- Name: _services_v_version_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    value character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_intro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_intro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_intro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_intro_id_seq OWNED BY public._services_v_version_intro.id;


--
-- Name: _services_v_version_process; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._services_v_version_process (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id integer NOT NULL,
    title character varying,
    body character varying,
    _uuid character varying
);


--
-- Name: _services_v_version_process_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._services_v_version_process_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _services_v_version_process_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._services_v_version_process_id_seq OWNED BY public._services_v_version_process.id;


--
-- Name: homepage; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage (
    id integer NOT NULL,
    hero_image_id integer,
    hero_video_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


--
-- Name: homepage_about_body; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_about_body (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying NOT NULL
);


--
-- Name: homepage_hero_badges; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_hero_badges (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying NOT NULL
);


--
-- Name: homepage_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.homepage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: homepage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.homepage_id_seq OWNED BY public.homepage.id;


--
-- Name: homepage_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_locales (
    hero_title character varying,
    hero_subtitle character varying,
    about_title character varying,
    about_eyebrow character varying,
    process_title character varying,
    process_subtitle character varying,
    why_title character varying,
    why_subtitle character varying,
    cta_title character varying,
    cta_body character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: homepage_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.homepage_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: homepage_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.homepage_locales_id_seq OWNED BY public.homepage_locales.id;


--
-- Name: homepage_process; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_process (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    title character varying,
    body character varying
);


--
-- Name: homepage_stats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_stats (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    num character varying,
    label character varying
);


--
-- Name: homepage_why; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.homepage_why (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    title character varying,
    body character varying
);


--
-- Name: industries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries (
    id integer NOT NULL,
    slug character varying,
    image_id integer,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_industries_status DEFAULT 'draft'::public.enum_industries_status
);


--
-- Name: industries_considerations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries_considerations (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: industries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.industries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: industries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.industries_id_seq OWNED BY public.industries.id;


--
-- Name: industries_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: industries_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries_locales (
    title character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: industries_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.industries_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: industries_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.industries_locales_id_seq OWNED BY public.industries_locales.id;


--
-- Name: industries_offerings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries_offerings (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: insights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.insights (
    id integer NOT NULL,
    slug character varying,
    category public.enum_insights_category,
    date timestamp(3) with time zone,
    cover_id integer,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_insights_status DEFAULT 'draft'::public.enum_insights_status
);


--
-- Name: insights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.insights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: insights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.insights_id_seq OWNED BY public.insights.id;


--
-- Name: insights_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.insights_locales (
    title character varying,
    excerpt character varying,
    body jsonb,
    seo_title character varying,
    seo_description character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: insights_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.insights_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: insights_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.insights_locales_id_seq OWNED BY public.insights_locales.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.media (
    id integer NOT NULL,
    credit character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    url character varying,
    thumbnail_u_r_l character varying,
    filename character varying,
    mime_type character varying,
    filesize numeric,
    width numeric,
    height numeric,
    focal_x numeric,
    focal_y numeric,
    sizes_thumbnail_url character varying,
    sizes_thumbnail_width numeric,
    sizes_thumbnail_height numeric,
    sizes_thumbnail_mime_type character varying,
    sizes_thumbnail_filesize numeric,
    sizes_thumbnail_filename character varying,
    sizes_card_url character varying,
    sizes_card_width numeric,
    sizes_card_height numeric,
    sizes_card_mime_type character varying,
    sizes_card_filesize numeric,
    sizes_card_filename character varying,
    sizes_hero_url character varying,
    sizes_hero_width numeric,
    sizes_hero_height numeric,
    sizes_hero_mime_type character varying,
    sizes_hero_filesize numeric,
    sizes_hero_filename character varying
);


--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;


--
-- Name: media_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.media_locales (
    alt character varying NOT NULL,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: media_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.media_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.media_locales_id_seq OWNED BY public.media_locales.id;


--
-- Name: navigation; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.navigation (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


--
-- Name: navigation_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.navigation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: navigation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.navigation_id_seq OWNED BY public.navigation.id;


--
-- Name: navigation_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.navigation_locales (
    home character varying,
    about character varying,
    services character varying,
    resources character varying,
    clients character varying,
    insights character varying,
    careers character varying,
    contact character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: navigation_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.navigation_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: navigation_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.navigation_locales_id_seq OWNED BY public.navigation_locales.id;


--
-- Name: partners; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.partners (
    id integer NOT NULL,
    name character varying NOT NULL,
    "order" numeric DEFAULT 0,
    photo_id integer,
    initials character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: partners_credentials; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.partners_credentials (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying NOT NULL
);


--
-- Name: partners_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.partners_id_seq OWNED BY public.partners.id;


--
-- Name: partners_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.partners_locales (
    role character varying,
    designation character varying,
    bio character varying,
    education character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: partners_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.partners_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: partners_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.partners_locales_id_seq OWNED BY public.partners_locales.id;


--
-- Name: partners_memberships; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.partners_memberships (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying NOT NULL
);


--
-- Name: payload_kv; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_kv (
    id integer NOT NULL,
    key character varying NOT NULL,
    data jsonb NOT NULL
);


--
-- Name: payload_kv_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_kv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_kv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_kv_id_seq OWNED BY public.payload_kv.id;


--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_locked_documents (
    id integer NOT NULL,
    global_slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_locked_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_locked_documents_id_seq OWNED BY public.payload_locked_documents.id;


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_locked_documents_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer,
    media_id integer,
    insights_id integer,
    resources_id integer,
    services_id integer,
    industries_id integer,
    sectors_id integer,
    partners_id integer
);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_locked_documents_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNED BY public.payload_locked_documents_rels.id;


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_migrations (
    id integer NOT NULL,
    name character varying,
    batch numeric,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_migrations_id_seq OWNED BY public.payload_migrations.id;


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_preferences (
    id integer NOT NULL,
    key character varying,
    value jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_preferences_id_seq OWNED BY public.payload_preferences.id;


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_preferences_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer
);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_preferences_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNED BY public.payload_preferences_rels.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources (
    id integer NOT NULL,
    slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_resources_status DEFAULT 'draft'::public.enum_resources_status
);


--
-- Name: resources_faq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_faq (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    q character varying,
    a character varying
);


--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- Name: resources_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_locales (
    title character varying,
    category character varying,
    summary character varying,
    answer character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: resources_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.resources_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: resources_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.resources_locales_id_seq OWNED BY public.resources_locales.id;


--
-- Name: resources_sections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_sections (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    h character varying,
    note character varying,
    "table" jsonb
);


--
-- Name: resources_sections_body; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_sections_body (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: resources_sections_list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_sections_list (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: resources_sources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources_sources (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: sectors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sectors (
    id integer NOT NULL,
    slug character varying,
    icon character varying,
    "order" numeric DEFAULT 0,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_sectors_status DEFAULT 'draft'::public.enum_sectors_status
);


--
-- Name: sectors_considerations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sectors_considerations (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: sectors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sectors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sectors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sectors_id_seq OWNED BY public.sectors.id;


--
-- Name: sectors_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sectors_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: sectors_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sectors_locales (
    title character varying,
    body character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: sectors_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sectors_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sectors_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sectors_locales_id_seq OWNED BY public.sectors_locales.id;


--
-- Name: sectors_offerings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sectors_offerings (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: services; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services (
    id integer NOT NULL,
    slug character varying,
    icon character varying,
    "order" numeric DEFAULT 0,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_services_status DEFAULT 'draft'::public.enum_services_status
);


--
-- Name: services_deliverables; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_deliverables (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: services_faq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_faq (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    q character varying,
    a character varying
);


--
-- Name: services_for_who; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_for_who (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: services_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;


--
-- Name: services_includes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_includes (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: services_intro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_intro (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    value character varying
);


--
-- Name: services_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_locales (
    title character varying,
    tagline character varying,
    summary character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: services_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.services_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: services_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.services_locales_id_seq OWNED BY public.services_locales.id;


--
-- Name: services_process; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services_process (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _locale public._locales NOT NULL,
    id character varying NOT NULL,
    title character varying,
    body character varying
);


--
-- Name: site_settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.site_settings (
    id integer NOT NULL,
    name character varying,
    legal_name character varying,
    address_line1 character varying,
    address_line2 character varying,
    city character varying,
    country character varying,
    po_box character varying,
    phone character varying,
    phone_secondary character varying,
    mobile character varying,
    email character varying,
    map_url character varying,
    facebook character varying,
    linkedin character varying,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


--
-- Name: site_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.site_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: site_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.site_settings_id_seq OWNED BY public.site_settings.id;


--
-- Name: site_settings_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.site_settings_locales (
    tagline character varying,
    description character varying,
    hours character varying,
    footer_desc character varying,
    footer_disclaimer character varying,
    footer_rights character varying,
    built_by character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


--
-- Name: site_settings_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.site_settings_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: site_settings_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.site_settings_locales_id_seq OWNED BY public.site_settings_locales.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying NOT NULL,
    role public.enum_users_role DEFAULT 'editor'::public.enum_users_role NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    email character varying NOT NULL,
    reset_password_token character varying,
    reset_password_expiration timestamp(3) with time zone,
    salt character varying,
    hash character varying,
    login_attempts numeric DEFAULT 0,
    lock_until timestamp(3) with time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_sessions (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    created_at timestamp(3) with time zone,
    expires_at timestamp(3) with time zone NOT NULL
);


--
-- Name: _industries_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v ALTER COLUMN id SET DEFAULT nextval('public._industries_v_id_seq'::regclass);


--
-- Name: _industries_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_locales ALTER COLUMN id SET DEFAULT nextval('public._industries_v_locales_id_seq'::regclass);


--
-- Name: _industries_v_version_considerations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_considerations ALTER COLUMN id SET DEFAULT nextval('public._industries_v_version_considerations_id_seq'::regclass);


--
-- Name: _industries_v_version_intro id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_intro ALTER COLUMN id SET DEFAULT nextval('public._industries_v_version_intro_id_seq'::regclass);


--
-- Name: _industries_v_version_offerings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_offerings ALTER COLUMN id SET DEFAULT nextval('public._industries_v_version_offerings_id_seq'::regclass);


--
-- Name: _insights_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v ALTER COLUMN id SET DEFAULT nextval('public._insights_v_id_seq'::regclass);


--
-- Name: _insights_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v_locales ALTER COLUMN id SET DEFAULT nextval('public._insights_v_locales_id_seq'::regclass);


--
-- Name: _resources_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v ALTER COLUMN id SET DEFAULT nextval('public._resources_v_id_seq'::regclass);


--
-- Name: _resources_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_locales ALTER COLUMN id SET DEFAULT nextval('public._resources_v_locales_id_seq'::regclass);


--
-- Name: _resources_v_version_faq id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_faq ALTER COLUMN id SET DEFAULT nextval('public._resources_v_version_faq_id_seq'::regclass);


--
-- Name: _resources_v_version_sections id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections ALTER COLUMN id SET DEFAULT nextval('public._resources_v_version_sections_id_seq'::regclass);


--
-- Name: _resources_v_version_sections_body id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_body ALTER COLUMN id SET DEFAULT nextval('public._resources_v_version_sections_body_id_seq'::regclass);


--
-- Name: _resources_v_version_sections_list id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_list ALTER COLUMN id SET DEFAULT nextval('public._resources_v_version_sections_list_id_seq'::regclass);


--
-- Name: _resources_v_version_sources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sources ALTER COLUMN id SET DEFAULT nextval('public._resources_v_version_sources_id_seq'::regclass);


--
-- Name: _sectors_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v ALTER COLUMN id SET DEFAULT nextval('public._sectors_v_id_seq'::regclass);


--
-- Name: _sectors_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_locales ALTER COLUMN id SET DEFAULT nextval('public._sectors_v_locales_id_seq'::regclass);


--
-- Name: _sectors_v_version_considerations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_considerations ALTER COLUMN id SET DEFAULT nextval('public._sectors_v_version_considerations_id_seq'::regclass);


--
-- Name: _sectors_v_version_intro id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_intro ALTER COLUMN id SET DEFAULT nextval('public._sectors_v_version_intro_id_seq'::regclass);


--
-- Name: _sectors_v_version_offerings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_offerings ALTER COLUMN id SET DEFAULT nextval('public._sectors_v_version_offerings_id_seq'::regclass);


--
-- Name: _services_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v ALTER COLUMN id SET DEFAULT nextval('public._services_v_id_seq'::regclass);


--
-- Name: _services_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_locales ALTER COLUMN id SET DEFAULT nextval('public._services_v_locales_id_seq'::regclass);


--
-- Name: _services_v_version_deliverables id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_deliverables ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_deliverables_id_seq'::regclass);


--
-- Name: _services_v_version_faq id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_faq ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_faq_id_seq'::regclass);


--
-- Name: _services_v_version_for_who id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_for_who ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_for_who_id_seq'::regclass);


--
-- Name: _services_v_version_includes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_includes ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_includes_id_seq'::regclass);


--
-- Name: _services_v_version_intro id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_intro ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_intro_id_seq'::regclass);


--
-- Name: _services_v_version_process id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_process ALTER COLUMN id SET DEFAULT nextval('public._services_v_version_process_id_seq'::regclass);


--
-- Name: homepage id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage ALTER COLUMN id SET DEFAULT nextval('public.homepage_id_seq'::regclass);


--
-- Name: homepage_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_locales ALTER COLUMN id SET DEFAULT nextval('public.homepage_locales_id_seq'::regclass);


--
-- Name: industries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries ALTER COLUMN id SET DEFAULT nextval('public.industries_id_seq'::regclass);


--
-- Name: industries_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_locales ALTER COLUMN id SET DEFAULT nextval('public.industries_locales_id_seq'::regclass);


--
-- Name: insights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights ALTER COLUMN id SET DEFAULT nextval('public.insights_id_seq'::regclass);


--
-- Name: insights_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights_locales ALTER COLUMN id SET DEFAULT nextval('public.insights_locales_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);


--
-- Name: media_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media_locales ALTER COLUMN id SET DEFAULT nextval('public.media_locales_id_seq'::regclass);


--
-- Name: navigation id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.navigation ALTER COLUMN id SET DEFAULT nextval('public.navigation_id_seq'::regclass);


--
-- Name: navigation_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.navigation_locales ALTER COLUMN id SET DEFAULT nextval('public.navigation_locales_id_seq'::regclass);


--
-- Name: partners id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners ALTER COLUMN id SET DEFAULT nextval('public.partners_id_seq'::regclass);


--
-- Name: partners_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_locales ALTER COLUMN id SET DEFAULT nextval('public.partners_locales_id_seq'::regclass);


--
-- Name: payload_kv id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_kv ALTER COLUMN id SET DEFAULT nextval('public.payload_kv_id_seq'::regclass);


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_id_seq'::regclass);


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_rels_id_seq'::regclass);


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_migrations ALTER COLUMN id SET DEFAULT nextval('public.payload_migrations_id_seq'::regclass);


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_id_seq'::regclass);


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_rels_id_seq'::regclass);


--
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- Name: resources_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_locales ALTER COLUMN id SET DEFAULT nextval('public.resources_locales_id_seq'::regclass);


--
-- Name: sectors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors ALTER COLUMN id SET DEFAULT nextval('public.sectors_id_seq'::regclass);


--
-- Name: sectors_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_locales ALTER COLUMN id SET DEFAULT nextval('public.sectors_locales_id_seq'::regclass);


--
-- Name: services id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);


--
-- Name: services_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_locales ALTER COLUMN id SET DEFAULT nextval('public.services_locales_id_seq'::regclass);


--
-- Name: site_settings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.site_settings ALTER COLUMN id SET DEFAULT nextval('public.site_settings_id_seq'::regclass);


--
-- Name: site_settings_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.site_settings_locales ALTER COLUMN id SET DEFAULT nextval('public.site_settings_locales_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: _industries_v_locales _industries_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_locales
    ADD CONSTRAINT _industries_v_locales_pkey PRIMARY KEY (id);


--
-- Name: _industries_v _industries_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v
    ADD CONSTRAINT _industries_v_pkey PRIMARY KEY (id);


--
-- Name: _industries_v_version_considerations _industries_v_version_considerations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_considerations
    ADD CONSTRAINT _industries_v_version_considerations_pkey PRIMARY KEY (id);


--
-- Name: _industries_v_version_intro _industries_v_version_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_intro
    ADD CONSTRAINT _industries_v_version_intro_pkey PRIMARY KEY (id);


--
-- Name: _industries_v_version_offerings _industries_v_version_offerings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_offerings
    ADD CONSTRAINT _industries_v_version_offerings_pkey PRIMARY KEY (id);


--
-- Name: _insights_v_locales _insights_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v_locales
    ADD CONSTRAINT _insights_v_locales_pkey PRIMARY KEY (id);


--
-- Name: _insights_v _insights_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v
    ADD CONSTRAINT _insights_v_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_locales _resources_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_locales
    ADD CONSTRAINT _resources_v_locales_pkey PRIMARY KEY (id);


--
-- Name: _resources_v _resources_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v
    ADD CONSTRAINT _resources_v_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_version_faq _resources_v_version_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_faq
    ADD CONSTRAINT _resources_v_version_faq_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_version_sections_body _resources_v_version_sections_body_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_body
    ADD CONSTRAINT _resources_v_version_sections_body_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_version_sections_list _resources_v_version_sections_list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_list
    ADD CONSTRAINT _resources_v_version_sections_list_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_version_sections _resources_v_version_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections
    ADD CONSTRAINT _resources_v_version_sections_pkey PRIMARY KEY (id);


--
-- Name: _resources_v_version_sources _resources_v_version_sources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sources
    ADD CONSTRAINT _resources_v_version_sources_pkey PRIMARY KEY (id);


--
-- Name: _sectors_v_locales _sectors_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_locales
    ADD CONSTRAINT _sectors_v_locales_pkey PRIMARY KEY (id);


--
-- Name: _sectors_v _sectors_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v
    ADD CONSTRAINT _sectors_v_pkey PRIMARY KEY (id);


--
-- Name: _sectors_v_version_considerations _sectors_v_version_considerations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_considerations
    ADD CONSTRAINT _sectors_v_version_considerations_pkey PRIMARY KEY (id);


--
-- Name: _sectors_v_version_intro _sectors_v_version_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_intro
    ADD CONSTRAINT _sectors_v_version_intro_pkey PRIMARY KEY (id);


--
-- Name: _sectors_v_version_offerings _sectors_v_version_offerings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_offerings
    ADD CONSTRAINT _sectors_v_version_offerings_pkey PRIMARY KEY (id);


--
-- Name: _services_v_locales _services_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_locales
    ADD CONSTRAINT _services_v_locales_pkey PRIMARY KEY (id);


--
-- Name: _services_v _services_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v
    ADD CONSTRAINT _services_v_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_deliverables _services_v_version_deliverables_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_deliverables
    ADD CONSTRAINT _services_v_version_deliverables_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_faq _services_v_version_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_faq
    ADD CONSTRAINT _services_v_version_faq_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_for_who _services_v_version_for_who_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_for_who
    ADD CONSTRAINT _services_v_version_for_who_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_includes _services_v_version_includes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_includes
    ADD CONSTRAINT _services_v_version_includes_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_intro _services_v_version_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_intro
    ADD CONSTRAINT _services_v_version_intro_pkey PRIMARY KEY (id);


--
-- Name: _services_v_version_process _services_v_version_process_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_process
    ADD CONSTRAINT _services_v_version_process_pkey PRIMARY KEY (id);


--
-- Name: homepage_about_body homepage_about_body_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_about_body
    ADD CONSTRAINT homepage_about_body_pkey PRIMARY KEY (id);


--
-- Name: homepage_hero_badges homepage_hero_badges_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_hero_badges
    ADD CONSTRAINT homepage_hero_badges_pkey PRIMARY KEY (id);


--
-- Name: homepage_locales homepage_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_locales
    ADD CONSTRAINT homepage_locales_pkey PRIMARY KEY (id);


--
-- Name: homepage homepage_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage
    ADD CONSTRAINT homepage_pkey PRIMARY KEY (id);


--
-- Name: homepage_process homepage_process_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_process
    ADD CONSTRAINT homepage_process_pkey PRIMARY KEY (id);


--
-- Name: homepage_stats homepage_stats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_stats
    ADD CONSTRAINT homepage_stats_pkey PRIMARY KEY (id);


--
-- Name: homepage_why homepage_why_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_why
    ADD CONSTRAINT homepage_why_pkey PRIMARY KEY (id);


--
-- Name: industries_considerations industries_considerations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_considerations
    ADD CONSTRAINT industries_considerations_pkey PRIMARY KEY (id);


--
-- Name: industries_intro industries_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_intro
    ADD CONSTRAINT industries_intro_pkey PRIMARY KEY (id);


--
-- Name: industries_locales industries_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_locales
    ADD CONSTRAINT industries_locales_pkey PRIMARY KEY (id);


--
-- Name: industries_offerings industries_offerings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_offerings
    ADD CONSTRAINT industries_offerings_pkey PRIMARY KEY (id);


--
-- Name: industries industries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_pkey PRIMARY KEY (id);


--
-- Name: insights_locales insights_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights_locales
    ADD CONSTRAINT insights_locales_pkey PRIMARY KEY (id);


--
-- Name: insights insights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights
    ADD CONSTRAINT insights_pkey PRIMARY KEY (id);


--
-- Name: media_locales media_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media_locales
    ADD CONSTRAINT media_locales_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: navigation_locales navigation_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.navigation_locales
    ADD CONSTRAINT navigation_locales_pkey PRIMARY KEY (id);


--
-- Name: navigation navigation_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.navigation
    ADD CONSTRAINT navigation_pkey PRIMARY KEY (id);


--
-- Name: partners_credentials partners_credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_credentials
    ADD CONSTRAINT partners_credentials_pkey PRIMARY KEY (id);


--
-- Name: partners_locales partners_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_locales
    ADD CONSTRAINT partners_locales_pkey PRIMARY KEY (id);


--
-- Name: partners_memberships partners_memberships_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_memberships
    ADD CONSTRAINT partners_memberships_pkey PRIMARY KEY (id);


--
-- Name: partners partners_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);


--
-- Name: payload_kv payload_kv_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_kv
    ADD CONSTRAINT payload_kv_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents
    ADD CONSTRAINT payload_locked_documents_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pkey PRIMARY KEY (id);


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_migrations
    ADD CONSTRAINT payload_migrations_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences
    ADD CONSTRAINT payload_preferences_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_pkey PRIMARY KEY (id);


--
-- Name: resources_faq resources_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_faq
    ADD CONSTRAINT resources_faq_pkey PRIMARY KEY (id);


--
-- Name: resources_locales resources_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_locales
    ADD CONSTRAINT resources_locales_pkey PRIMARY KEY (id);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: resources_sections_body resources_sections_body_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections_body
    ADD CONSTRAINT resources_sections_body_pkey PRIMARY KEY (id);


--
-- Name: resources_sections_list resources_sections_list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections_list
    ADD CONSTRAINT resources_sections_list_pkey PRIMARY KEY (id);


--
-- Name: resources_sections resources_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections
    ADD CONSTRAINT resources_sections_pkey PRIMARY KEY (id);


--
-- Name: resources_sources resources_sources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sources
    ADD CONSTRAINT resources_sources_pkey PRIMARY KEY (id);


--
-- Name: sectors_considerations sectors_considerations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_considerations
    ADD CONSTRAINT sectors_considerations_pkey PRIMARY KEY (id);


--
-- Name: sectors_intro sectors_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_intro
    ADD CONSTRAINT sectors_intro_pkey PRIMARY KEY (id);


--
-- Name: sectors_locales sectors_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_locales
    ADD CONSTRAINT sectors_locales_pkey PRIMARY KEY (id);


--
-- Name: sectors_offerings sectors_offerings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_offerings
    ADD CONSTRAINT sectors_offerings_pkey PRIMARY KEY (id);


--
-- Name: sectors sectors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors
    ADD CONSTRAINT sectors_pkey PRIMARY KEY (id);


--
-- Name: services_deliverables services_deliverables_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_deliverables
    ADD CONSTRAINT services_deliverables_pkey PRIMARY KEY (id);


--
-- Name: services_faq services_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_faq
    ADD CONSTRAINT services_faq_pkey PRIMARY KEY (id);


--
-- Name: services_for_who services_for_who_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_for_who
    ADD CONSTRAINT services_for_who_pkey PRIMARY KEY (id);


--
-- Name: services_includes services_includes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_includes
    ADD CONSTRAINT services_includes_pkey PRIMARY KEY (id);


--
-- Name: services_intro services_intro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_intro
    ADD CONSTRAINT services_intro_pkey PRIMARY KEY (id);


--
-- Name: services_locales services_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_locales
    ADD CONSTRAINT services_locales_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: services_process services_process_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_process
    ADD CONSTRAINT services_process_pkey PRIMARY KEY (id);


--
-- Name: site_settings_locales site_settings_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.site_settings_locales
    ADD CONSTRAINT site_settings_locales_pkey PRIMARY KEY (id);


--
-- Name: site_settings site_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.site_settings
    ADD CONSTRAINT site_settings_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_sessions users_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_pkey PRIMARY KEY (id);


--
-- Name: _industries_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_created_at_idx ON public._industries_v USING btree (created_at);


--
-- Name: _industries_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_latest_idx ON public._industries_v USING btree (latest);


--
-- Name: _industries_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX _industries_v_locales_locale_parent_id_unique ON public._industries_v_locales USING btree (_locale, _parent_id);


--
-- Name: _industries_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_parent_idx ON public._industries_v USING btree (parent_id);


--
-- Name: _industries_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_published_locale_idx ON public._industries_v USING btree (published_locale);


--
-- Name: _industries_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_snapshot_idx ON public._industries_v USING btree (snapshot);


--
-- Name: _industries_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_updated_at_idx ON public._industries_v USING btree (updated_at);


--
-- Name: _industries_v_version_considerations_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_considerations_locale_idx ON public._industries_v_version_considerations USING btree (_locale);


--
-- Name: _industries_v_version_considerations_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_considerations_order_idx ON public._industries_v_version_considerations USING btree (_order);


--
-- Name: _industries_v_version_considerations_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_considerations_parent_id_idx ON public._industries_v_version_considerations USING btree (_parent_id);


--
-- Name: _industries_v_version_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_intro_locale_idx ON public._industries_v_version_intro USING btree (_locale);


--
-- Name: _industries_v_version_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_intro_order_idx ON public._industries_v_version_intro USING btree (_order);


--
-- Name: _industries_v_version_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_intro_parent_id_idx ON public._industries_v_version_intro USING btree (_parent_id);


--
-- Name: _industries_v_version_offerings_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_offerings_locale_idx ON public._industries_v_version_offerings USING btree (_locale);


--
-- Name: _industries_v_version_offerings_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_offerings_order_idx ON public._industries_v_version_offerings USING btree (_order);


--
-- Name: _industries_v_version_offerings_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_offerings_parent_id_idx ON public._industries_v_version_offerings USING btree (_parent_id);


--
-- Name: _industries_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_version__status_idx ON public._industries_v USING btree (version__status);


--
-- Name: _industries_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_version_created_at_idx ON public._industries_v USING btree (version_created_at);


--
-- Name: _industries_v_version_version_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_version_image_idx ON public._industries_v USING btree (version_image_id);


--
-- Name: _industries_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_version_slug_idx ON public._industries_v USING btree (version_slug);


--
-- Name: _industries_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _industries_v_version_version_updated_at_idx ON public._industries_v USING btree (version_updated_at);


--
-- Name: _insights_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_created_at_idx ON public._insights_v USING btree (created_at);


--
-- Name: _insights_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_latest_idx ON public._insights_v USING btree (latest);


--
-- Name: _insights_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX _insights_v_locales_locale_parent_id_unique ON public._insights_v_locales USING btree (_locale, _parent_id);


--
-- Name: _insights_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_parent_idx ON public._insights_v USING btree (parent_id);


--
-- Name: _insights_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_published_locale_idx ON public._insights_v USING btree (published_locale);


--
-- Name: _insights_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_snapshot_idx ON public._insights_v USING btree (snapshot);


--
-- Name: _insights_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_updated_at_idx ON public._insights_v USING btree (updated_at);


--
-- Name: _insights_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_version_version__status_idx ON public._insights_v USING btree (version__status);


--
-- Name: _insights_v_version_version_cover_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_version_version_cover_idx ON public._insights_v USING btree (version_cover_id);


--
-- Name: _insights_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_version_version_created_at_idx ON public._insights_v USING btree (version_created_at);


--
-- Name: _insights_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_version_version_slug_idx ON public._insights_v USING btree (version_slug);


--
-- Name: _insights_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _insights_v_version_version_updated_at_idx ON public._insights_v USING btree (version_updated_at);


--
-- Name: _resources_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_created_at_idx ON public._resources_v USING btree (created_at);


--
-- Name: _resources_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_latest_idx ON public._resources_v USING btree (latest);


--
-- Name: _resources_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX _resources_v_locales_locale_parent_id_unique ON public._resources_v_locales USING btree (_locale, _parent_id);


--
-- Name: _resources_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_parent_idx ON public._resources_v USING btree (parent_id);


--
-- Name: _resources_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_published_locale_idx ON public._resources_v USING btree (published_locale);


--
-- Name: _resources_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_snapshot_idx ON public._resources_v USING btree (snapshot);


--
-- Name: _resources_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_updated_at_idx ON public._resources_v USING btree (updated_at);


--
-- Name: _resources_v_version_faq_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_faq_locale_idx ON public._resources_v_version_faq USING btree (_locale);


--
-- Name: _resources_v_version_faq_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_faq_order_idx ON public._resources_v_version_faq USING btree (_order);


--
-- Name: _resources_v_version_faq_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_faq_parent_id_idx ON public._resources_v_version_faq USING btree (_parent_id);


--
-- Name: _resources_v_version_sections_body_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_body_locale_idx ON public._resources_v_version_sections_body USING btree (_locale);


--
-- Name: _resources_v_version_sections_body_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_body_order_idx ON public._resources_v_version_sections_body USING btree (_order);


--
-- Name: _resources_v_version_sections_body_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_body_parent_id_idx ON public._resources_v_version_sections_body USING btree (_parent_id);


--
-- Name: _resources_v_version_sections_list_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_list_locale_idx ON public._resources_v_version_sections_list USING btree (_locale);


--
-- Name: _resources_v_version_sections_list_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_list_order_idx ON public._resources_v_version_sections_list USING btree (_order);


--
-- Name: _resources_v_version_sections_list_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_list_parent_id_idx ON public._resources_v_version_sections_list USING btree (_parent_id);


--
-- Name: _resources_v_version_sections_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_locale_idx ON public._resources_v_version_sections USING btree (_locale);


--
-- Name: _resources_v_version_sections_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_order_idx ON public._resources_v_version_sections USING btree (_order);


--
-- Name: _resources_v_version_sections_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sections_parent_id_idx ON public._resources_v_version_sections USING btree (_parent_id);


--
-- Name: _resources_v_version_sources_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sources_locale_idx ON public._resources_v_version_sources USING btree (_locale);


--
-- Name: _resources_v_version_sources_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sources_order_idx ON public._resources_v_version_sources USING btree (_order);


--
-- Name: _resources_v_version_sources_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_sources_parent_id_idx ON public._resources_v_version_sources USING btree (_parent_id);


--
-- Name: _resources_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_version__status_idx ON public._resources_v USING btree (version__status);


--
-- Name: _resources_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_version_created_at_idx ON public._resources_v USING btree (version_created_at);


--
-- Name: _resources_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_version_slug_idx ON public._resources_v USING btree (version_slug);


--
-- Name: _resources_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _resources_v_version_version_updated_at_idx ON public._resources_v USING btree (version_updated_at);


--
-- Name: _sectors_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_created_at_idx ON public._sectors_v USING btree (created_at);


--
-- Name: _sectors_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_latest_idx ON public._sectors_v USING btree (latest);


--
-- Name: _sectors_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX _sectors_v_locales_locale_parent_id_unique ON public._sectors_v_locales USING btree (_locale, _parent_id);


--
-- Name: _sectors_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_parent_idx ON public._sectors_v USING btree (parent_id);


--
-- Name: _sectors_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_published_locale_idx ON public._sectors_v USING btree (published_locale);


--
-- Name: _sectors_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_snapshot_idx ON public._sectors_v USING btree (snapshot);


--
-- Name: _sectors_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_updated_at_idx ON public._sectors_v USING btree (updated_at);


--
-- Name: _sectors_v_version_considerations_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_considerations_locale_idx ON public._sectors_v_version_considerations USING btree (_locale);


--
-- Name: _sectors_v_version_considerations_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_considerations_order_idx ON public._sectors_v_version_considerations USING btree (_order);


--
-- Name: _sectors_v_version_considerations_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_considerations_parent_id_idx ON public._sectors_v_version_considerations USING btree (_parent_id);


--
-- Name: _sectors_v_version_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_intro_locale_idx ON public._sectors_v_version_intro USING btree (_locale);


--
-- Name: _sectors_v_version_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_intro_order_idx ON public._sectors_v_version_intro USING btree (_order);


--
-- Name: _sectors_v_version_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_intro_parent_id_idx ON public._sectors_v_version_intro USING btree (_parent_id);


--
-- Name: _sectors_v_version_offerings_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_offerings_locale_idx ON public._sectors_v_version_offerings USING btree (_locale);


--
-- Name: _sectors_v_version_offerings_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_offerings_order_idx ON public._sectors_v_version_offerings USING btree (_order);


--
-- Name: _sectors_v_version_offerings_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_offerings_parent_id_idx ON public._sectors_v_version_offerings USING btree (_parent_id);


--
-- Name: _sectors_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_version__status_idx ON public._sectors_v USING btree (version__status);


--
-- Name: _sectors_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_version_created_at_idx ON public._sectors_v USING btree (version_created_at);


--
-- Name: _sectors_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_version_slug_idx ON public._sectors_v USING btree (version_slug);


--
-- Name: _sectors_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _sectors_v_version_version_updated_at_idx ON public._sectors_v USING btree (version_updated_at);


--
-- Name: _services_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_created_at_idx ON public._services_v USING btree (created_at);


--
-- Name: _services_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_latest_idx ON public._services_v USING btree (latest);


--
-- Name: _services_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX _services_v_locales_locale_parent_id_unique ON public._services_v_locales USING btree (_locale, _parent_id);


--
-- Name: _services_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_parent_idx ON public._services_v USING btree (parent_id);


--
-- Name: _services_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_published_locale_idx ON public._services_v USING btree (published_locale);


--
-- Name: _services_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_snapshot_idx ON public._services_v USING btree (snapshot);


--
-- Name: _services_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_updated_at_idx ON public._services_v USING btree (updated_at);


--
-- Name: _services_v_version_deliverables_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_deliverables_locale_idx ON public._services_v_version_deliverables USING btree (_locale);


--
-- Name: _services_v_version_deliverables_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_deliverables_order_idx ON public._services_v_version_deliverables USING btree (_order);


--
-- Name: _services_v_version_deliverables_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_deliverables_parent_id_idx ON public._services_v_version_deliverables USING btree (_parent_id);


--
-- Name: _services_v_version_faq_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_faq_locale_idx ON public._services_v_version_faq USING btree (_locale);


--
-- Name: _services_v_version_faq_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_faq_order_idx ON public._services_v_version_faq USING btree (_order);


--
-- Name: _services_v_version_faq_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_faq_parent_id_idx ON public._services_v_version_faq USING btree (_parent_id);


--
-- Name: _services_v_version_for_who_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_for_who_locale_idx ON public._services_v_version_for_who USING btree (_locale);


--
-- Name: _services_v_version_for_who_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_for_who_order_idx ON public._services_v_version_for_who USING btree (_order);


--
-- Name: _services_v_version_for_who_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_for_who_parent_id_idx ON public._services_v_version_for_who USING btree (_parent_id);


--
-- Name: _services_v_version_includes_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_includes_locale_idx ON public._services_v_version_includes USING btree (_locale);


--
-- Name: _services_v_version_includes_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_includes_order_idx ON public._services_v_version_includes USING btree (_order);


--
-- Name: _services_v_version_includes_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_includes_parent_id_idx ON public._services_v_version_includes USING btree (_parent_id);


--
-- Name: _services_v_version_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_intro_locale_idx ON public._services_v_version_intro USING btree (_locale);


--
-- Name: _services_v_version_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_intro_order_idx ON public._services_v_version_intro USING btree (_order);


--
-- Name: _services_v_version_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_intro_parent_id_idx ON public._services_v_version_intro USING btree (_parent_id);


--
-- Name: _services_v_version_process_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_process_locale_idx ON public._services_v_version_process USING btree (_locale);


--
-- Name: _services_v_version_process_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_process_order_idx ON public._services_v_version_process USING btree (_order);


--
-- Name: _services_v_version_process_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_process_parent_id_idx ON public._services_v_version_process USING btree (_parent_id);


--
-- Name: _services_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_version__status_idx ON public._services_v USING btree (version__status);


--
-- Name: _services_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_version_created_at_idx ON public._services_v USING btree (version_created_at);


--
-- Name: _services_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_version_slug_idx ON public._services_v USING btree (version_slug);


--
-- Name: _services_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _services_v_version_version_updated_at_idx ON public._services_v USING btree (version_updated_at);


--
-- Name: homepage_about_body_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_about_body_locale_idx ON public.homepage_about_body USING btree (_locale);


--
-- Name: homepage_about_body_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_about_body_order_idx ON public.homepage_about_body USING btree (_order);


--
-- Name: homepage_about_body_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_about_body_parent_id_idx ON public.homepage_about_body USING btree (_parent_id);


--
-- Name: homepage_hero_badges_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_hero_badges_locale_idx ON public.homepage_hero_badges USING btree (_locale);


--
-- Name: homepage_hero_badges_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_hero_badges_order_idx ON public.homepage_hero_badges USING btree (_order);


--
-- Name: homepage_hero_badges_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_hero_badges_parent_id_idx ON public.homepage_hero_badges USING btree (_parent_id);


--
-- Name: homepage_hero_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_hero_image_idx ON public.homepage USING btree (hero_image_id);


--
-- Name: homepage_hero_video_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_hero_video_idx ON public.homepage USING btree (hero_video_id);


--
-- Name: homepage_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX homepage_locales_locale_parent_id_unique ON public.homepage_locales USING btree (_locale, _parent_id);


--
-- Name: homepage_process_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_process_locale_idx ON public.homepage_process USING btree (_locale);


--
-- Name: homepage_process_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_process_order_idx ON public.homepage_process USING btree (_order);


--
-- Name: homepage_process_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_process_parent_id_idx ON public.homepage_process USING btree (_parent_id);


--
-- Name: homepage_stats_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_stats_locale_idx ON public.homepage_stats USING btree (_locale);


--
-- Name: homepage_stats_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_stats_order_idx ON public.homepage_stats USING btree (_order);


--
-- Name: homepage_stats_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_stats_parent_id_idx ON public.homepage_stats USING btree (_parent_id);


--
-- Name: homepage_why_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_why_locale_idx ON public.homepage_why USING btree (_locale);


--
-- Name: homepage_why_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_why_order_idx ON public.homepage_why USING btree (_order);


--
-- Name: homepage_why_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX homepage_why_parent_id_idx ON public.homepage_why USING btree (_parent_id);


--
-- Name: industries__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries__status_idx ON public.industries USING btree (_status);


--
-- Name: industries_considerations_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_considerations_locale_idx ON public.industries_considerations USING btree (_locale);


--
-- Name: industries_considerations_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_considerations_order_idx ON public.industries_considerations USING btree (_order);


--
-- Name: industries_considerations_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_considerations_parent_id_idx ON public.industries_considerations USING btree (_parent_id);


--
-- Name: industries_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_created_at_idx ON public.industries USING btree (created_at);


--
-- Name: industries_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_image_idx ON public.industries USING btree (image_id);


--
-- Name: industries_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_intro_locale_idx ON public.industries_intro USING btree (_locale);


--
-- Name: industries_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_intro_order_idx ON public.industries_intro USING btree (_order);


--
-- Name: industries_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_intro_parent_id_idx ON public.industries_intro USING btree (_parent_id);


--
-- Name: industries_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX industries_locales_locale_parent_id_unique ON public.industries_locales USING btree (_locale, _parent_id);


--
-- Name: industries_offerings_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_offerings_locale_idx ON public.industries_offerings USING btree (_locale);


--
-- Name: industries_offerings_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_offerings_order_idx ON public.industries_offerings USING btree (_order);


--
-- Name: industries_offerings_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_offerings_parent_id_idx ON public.industries_offerings USING btree (_parent_id);


--
-- Name: industries_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX industries_slug_idx ON public.industries USING btree (slug);


--
-- Name: industries_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX industries_updated_at_idx ON public.industries USING btree (updated_at);


--
-- Name: insights__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX insights__status_idx ON public.insights USING btree (_status);


--
-- Name: insights_cover_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX insights_cover_idx ON public.insights USING btree (cover_id);


--
-- Name: insights_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX insights_created_at_idx ON public.insights USING btree (created_at);


--
-- Name: insights_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX insights_locales_locale_parent_id_unique ON public.insights_locales USING btree (_locale, _parent_id);


--
-- Name: insights_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX insights_slug_idx ON public.insights USING btree (slug);


--
-- Name: insights_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX insights_updated_at_idx ON public.insights USING btree (updated_at);


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_created_at_idx ON public.media USING btree (created_at);


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX media_filename_idx ON public.media USING btree (filename);


--
-- Name: media_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX media_locales_locale_parent_id_unique ON public.media_locales USING btree (_locale, _parent_id);


--
-- Name: media_sizes_card_sizes_card_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_sizes_card_sizes_card_filename_idx ON public.media USING btree (sizes_card_filename);


--
-- Name: media_sizes_hero_sizes_hero_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_sizes_hero_sizes_hero_filename_idx ON public.media USING btree (sizes_hero_filename);


--
-- Name: media_sizes_thumbnail_sizes_thumbnail_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_sizes_thumbnail_sizes_thumbnail_filename_idx ON public.media USING btree (sizes_thumbnail_filename);


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_updated_at_idx ON public.media USING btree (updated_at);


--
-- Name: navigation_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX navigation_locales_locale_parent_id_unique ON public.navigation_locales USING btree (_locale, _parent_id);


--
-- Name: partners_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_created_at_idx ON public.partners USING btree (created_at);


--
-- Name: partners_credentials_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_credentials_locale_idx ON public.partners_credentials USING btree (_locale);


--
-- Name: partners_credentials_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_credentials_order_idx ON public.partners_credentials USING btree (_order);


--
-- Name: partners_credentials_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_credentials_parent_id_idx ON public.partners_credentials USING btree (_parent_id);


--
-- Name: partners_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX partners_locales_locale_parent_id_unique ON public.partners_locales USING btree (_locale, _parent_id);


--
-- Name: partners_memberships_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_memberships_locale_idx ON public.partners_memberships USING btree (_locale);


--
-- Name: partners_memberships_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_memberships_order_idx ON public.partners_memberships USING btree (_order);


--
-- Name: partners_memberships_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_memberships_parent_id_idx ON public.partners_memberships USING btree (_parent_id);


--
-- Name: partners_photo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_photo_idx ON public.partners USING btree (photo_id);


--
-- Name: partners_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX partners_updated_at_idx ON public.partners USING btree (updated_at);


--
-- Name: payload_kv_key_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX payload_kv_key_idx ON public.payload_kv USING btree (key);


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_created_at_idx ON public.payload_locked_documents USING btree (created_at);


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_global_slug_idx ON public.payload_locked_documents USING btree (global_slug);


--
-- Name: payload_locked_documents_rels_industries_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_industries_id_idx ON public.payload_locked_documents_rels USING btree (industries_id);


--
-- Name: payload_locked_documents_rels_insights_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_insights_id_idx ON public.payload_locked_documents_rels USING btree (insights_id);


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_media_id_idx ON public.payload_locked_documents_rels USING btree (media_id);


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_order_idx ON public.payload_locked_documents_rels USING btree ("order");


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_parent_idx ON public.payload_locked_documents_rels USING btree (parent_id);


--
-- Name: payload_locked_documents_rels_partners_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_partners_id_idx ON public.payload_locked_documents_rels USING btree (partners_id);


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_path_idx ON public.payload_locked_documents_rels USING btree (path);


--
-- Name: payload_locked_documents_rels_resources_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_resources_id_idx ON public.payload_locked_documents_rels USING btree (resources_id);


--
-- Name: payload_locked_documents_rels_sectors_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_sectors_id_idx ON public.payload_locked_documents_rels USING btree (sectors_id);


--
-- Name: payload_locked_documents_rels_services_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_services_id_idx ON public.payload_locked_documents_rels USING btree (services_id);


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_users_id_idx ON public.payload_locked_documents_rels USING btree (users_id);


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_updated_at_idx ON public.payload_locked_documents USING btree (updated_at);


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_migrations_created_at_idx ON public.payload_migrations USING btree (created_at);


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_migrations_updated_at_idx ON public.payload_migrations USING btree (updated_at);


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_created_at_idx ON public.payload_preferences USING btree (created_at);


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_key_idx ON public.payload_preferences USING btree (key);


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_order_idx ON public.payload_preferences_rels USING btree ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_parent_idx ON public.payload_preferences_rels USING btree (parent_id);


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_path_idx ON public.payload_preferences_rels USING btree (path);


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_users_id_idx ON public.payload_preferences_rels USING btree (users_id);


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_updated_at_idx ON public.payload_preferences USING btree (updated_at);


--
-- Name: resources__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources__status_idx ON public.resources USING btree (_status);


--
-- Name: resources_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_created_at_idx ON public.resources USING btree (created_at);


--
-- Name: resources_faq_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_faq_locale_idx ON public.resources_faq USING btree (_locale);


--
-- Name: resources_faq_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_faq_order_idx ON public.resources_faq USING btree (_order);


--
-- Name: resources_faq_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_faq_parent_id_idx ON public.resources_faq USING btree (_parent_id);


--
-- Name: resources_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX resources_locales_locale_parent_id_unique ON public.resources_locales USING btree (_locale, _parent_id);


--
-- Name: resources_sections_body_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_body_locale_idx ON public.resources_sections_body USING btree (_locale);


--
-- Name: resources_sections_body_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_body_order_idx ON public.resources_sections_body USING btree (_order);


--
-- Name: resources_sections_body_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_body_parent_id_idx ON public.resources_sections_body USING btree (_parent_id);


--
-- Name: resources_sections_list_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_list_locale_idx ON public.resources_sections_list USING btree (_locale);


--
-- Name: resources_sections_list_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_list_order_idx ON public.resources_sections_list USING btree (_order);


--
-- Name: resources_sections_list_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_list_parent_id_idx ON public.resources_sections_list USING btree (_parent_id);


--
-- Name: resources_sections_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_locale_idx ON public.resources_sections USING btree (_locale);


--
-- Name: resources_sections_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_order_idx ON public.resources_sections USING btree (_order);


--
-- Name: resources_sections_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sections_parent_id_idx ON public.resources_sections USING btree (_parent_id);


--
-- Name: resources_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX resources_slug_idx ON public.resources USING btree (slug);


--
-- Name: resources_sources_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sources_locale_idx ON public.resources_sources USING btree (_locale);


--
-- Name: resources_sources_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sources_order_idx ON public.resources_sources USING btree (_order);


--
-- Name: resources_sources_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_sources_parent_id_idx ON public.resources_sources USING btree (_parent_id);


--
-- Name: resources_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX resources_updated_at_idx ON public.resources USING btree (updated_at);


--
-- Name: sectors__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors__status_idx ON public.sectors USING btree (_status);


--
-- Name: sectors_considerations_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_considerations_locale_idx ON public.sectors_considerations USING btree (_locale);


--
-- Name: sectors_considerations_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_considerations_order_idx ON public.sectors_considerations USING btree (_order);


--
-- Name: sectors_considerations_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_considerations_parent_id_idx ON public.sectors_considerations USING btree (_parent_id);


--
-- Name: sectors_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_created_at_idx ON public.sectors USING btree (created_at);


--
-- Name: sectors_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_intro_locale_idx ON public.sectors_intro USING btree (_locale);


--
-- Name: sectors_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_intro_order_idx ON public.sectors_intro USING btree (_order);


--
-- Name: sectors_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_intro_parent_id_idx ON public.sectors_intro USING btree (_parent_id);


--
-- Name: sectors_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sectors_locales_locale_parent_id_unique ON public.sectors_locales USING btree (_locale, _parent_id);


--
-- Name: sectors_offerings_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_offerings_locale_idx ON public.sectors_offerings USING btree (_locale);


--
-- Name: sectors_offerings_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_offerings_order_idx ON public.sectors_offerings USING btree (_order);


--
-- Name: sectors_offerings_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_offerings_parent_id_idx ON public.sectors_offerings USING btree (_parent_id);


--
-- Name: sectors_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sectors_slug_idx ON public.sectors USING btree (slug);


--
-- Name: sectors_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sectors_updated_at_idx ON public.sectors USING btree (updated_at);


--
-- Name: services__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services__status_idx ON public.services USING btree (_status);


--
-- Name: services_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_created_at_idx ON public.services USING btree (created_at);


--
-- Name: services_deliverables_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_deliverables_locale_idx ON public.services_deliverables USING btree (_locale);


--
-- Name: services_deliverables_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_deliverables_order_idx ON public.services_deliverables USING btree (_order);


--
-- Name: services_deliverables_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_deliverables_parent_id_idx ON public.services_deliverables USING btree (_parent_id);


--
-- Name: services_faq_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_faq_locale_idx ON public.services_faq USING btree (_locale);


--
-- Name: services_faq_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_faq_order_idx ON public.services_faq USING btree (_order);


--
-- Name: services_faq_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_faq_parent_id_idx ON public.services_faq USING btree (_parent_id);


--
-- Name: services_for_who_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_for_who_locale_idx ON public.services_for_who USING btree (_locale);


--
-- Name: services_for_who_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_for_who_order_idx ON public.services_for_who USING btree (_order);


--
-- Name: services_for_who_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_for_who_parent_id_idx ON public.services_for_who USING btree (_parent_id);


--
-- Name: services_includes_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_includes_locale_idx ON public.services_includes USING btree (_locale);


--
-- Name: services_includes_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_includes_order_idx ON public.services_includes USING btree (_order);


--
-- Name: services_includes_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_includes_parent_id_idx ON public.services_includes USING btree (_parent_id);


--
-- Name: services_intro_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_intro_locale_idx ON public.services_intro USING btree (_locale);


--
-- Name: services_intro_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_intro_order_idx ON public.services_intro USING btree (_order);


--
-- Name: services_intro_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_intro_parent_id_idx ON public.services_intro USING btree (_parent_id);


--
-- Name: services_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX services_locales_locale_parent_id_unique ON public.services_locales USING btree (_locale, _parent_id);


--
-- Name: services_process_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_process_locale_idx ON public.services_process USING btree (_locale);


--
-- Name: services_process_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_process_order_idx ON public.services_process USING btree (_order);


--
-- Name: services_process_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_process_parent_id_idx ON public.services_process USING btree (_parent_id);


--
-- Name: services_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX services_slug_idx ON public.services USING btree (slug);


--
-- Name: services_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX services_updated_at_idx ON public.services USING btree (updated_at);


--
-- Name: site_settings_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX site_settings_locales_locale_parent_id_unique ON public.site_settings_locales USING btree (_locale, _parent_id);


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_created_at_idx ON public.users USING btree (created_at);


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_sessions_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_sessions_order_idx ON public.users_sessions USING btree (_order);


--
-- Name: users_sessions_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_sessions_parent_id_idx ON public.users_sessions USING btree (_parent_id);


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_updated_at_idx ON public.users USING btree (updated_at);


--
-- Name: _industries_v_locales _industries_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_locales
    ADD CONSTRAINT _industries_v_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._industries_v(id) ON DELETE CASCADE;


--
-- Name: _industries_v _industries_v_parent_id_industries_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v
    ADD CONSTRAINT _industries_v_parent_id_industries_id_fk FOREIGN KEY (parent_id) REFERENCES public.industries(id) ON DELETE SET NULL;


--
-- Name: _industries_v_version_considerations _industries_v_version_considerations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_considerations
    ADD CONSTRAINT _industries_v_version_considerations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._industries_v(id) ON DELETE CASCADE;


--
-- Name: _industries_v _industries_v_version_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v
    ADD CONSTRAINT _industries_v_version_image_id_media_id_fk FOREIGN KEY (version_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _industries_v_version_intro _industries_v_version_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_intro
    ADD CONSTRAINT _industries_v_version_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._industries_v(id) ON DELETE CASCADE;


--
-- Name: _industries_v_version_offerings _industries_v_version_offerings_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._industries_v_version_offerings
    ADD CONSTRAINT _industries_v_version_offerings_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._industries_v(id) ON DELETE CASCADE;


--
-- Name: _insights_v_locales _insights_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v_locales
    ADD CONSTRAINT _insights_v_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._insights_v(id) ON DELETE CASCADE;


--
-- Name: _insights_v _insights_v_parent_id_insights_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v
    ADD CONSTRAINT _insights_v_parent_id_insights_id_fk FOREIGN KEY (parent_id) REFERENCES public.insights(id) ON DELETE SET NULL;


--
-- Name: _insights_v _insights_v_version_cover_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._insights_v
    ADD CONSTRAINT _insights_v_version_cover_id_media_id_fk FOREIGN KEY (version_cover_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: _resources_v_locales _resources_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_locales
    ADD CONSTRAINT _resources_v_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v(id) ON DELETE CASCADE;


--
-- Name: _resources_v _resources_v_parent_id_resources_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v
    ADD CONSTRAINT _resources_v_parent_id_resources_id_fk FOREIGN KEY (parent_id) REFERENCES public.resources(id) ON DELETE SET NULL;


--
-- Name: _resources_v_version_faq _resources_v_version_faq_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_faq
    ADD CONSTRAINT _resources_v_version_faq_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v(id) ON DELETE CASCADE;


--
-- Name: _resources_v_version_sections_body _resources_v_version_sections_body_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_body
    ADD CONSTRAINT _resources_v_version_sections_body_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v_version_sections(id) ON DELETE CASCADE;


--
-- Name: _resources_v_version_sections_list _resources_v_version_sections_list_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections_list
    ADD CONSTRAINT _resources_v_version_sections_list_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v_version_sections(id) ON DELETE CASCADE;


--
-- Name: _resources_v_version_sections _resources_v_version_sections_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sections
    ADD CONSTRAINT _resources_v_version_sections_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v(id) ON DELETE CASCADE;


--
-- Name: _resources_v_version_sources _resources_v_version_sources_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._resources_v_version_sources
    ADD CONSTRAINT _resources_v_version_sources_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._resources_v(id) ON DELETE CASCADE;


--
-- Name: _sectors_v_locales _sectors_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_locales
    ADD CONSTRAINT _sectors_v_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._sectors_v(id) ON DELETE CASCADE;


--
-- Name: _sectors_v _sectors_v_parent_id_sectors_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v
    ADD CONSTRAINT _sectors_v_parent_id_sectors_id_fk FOREIGN KEY (parent_id) REFERENCES public.sectors(id) ON DELETE SET NULL;


--
-- Name: _sectors_v_version_considerations _sectors_v_version_considerations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_considerations
    ADD CONSTRAINT _sectors_v_version_considerations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._sectors_v(id) ON DELETE CASCADE;


--
-- Name: _sectors_v_version_intro _sectors_v_version_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_intro
    ADD CONSTRAINT _sectors_v_version_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._sectors_v(id) ON DELETE CASCADE;


--
-- Name: _sectors_v_version_offerings _sectors_v_version_offerings_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._sectors_v_version_offerings
    ADD CONSTRAINT _sectors_v_version_offerings_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._sectors_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_locales _services_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_locales
    ADD CONSTRAINT _services_v_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v _services_v_parent_id_services_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v
    ADD CONSTRAINT _services_v_parent_id_services_id_fk FOREIGN KEY (parent_id) REFERENCES public.services(id) ON DELETE SET NULL;


--
-- Name: _services_v_version_deliverables _services_v_version_deliverables_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_deliverables
    ADD CONSTRAINT _services_v_version_deliverables_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_version_faq _services_v_version_faq_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_faq
    ADD CONSTRAINT _services_v_version_faq_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_version_for_who _services_v_version_for_who_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_for_who
    ADD CONSTRAINT _services_v_version_for_who_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_version_includes _services_v_version_includes_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_includes
    ADD CONSTRAINT _services_v_version_includes_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_version_intro _services_v_version_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_intro
    ADD CONSTRAINT _services_v_version_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: _services_v_version_process _services_v_version_process_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._services_v_version_process
    ADD CONSTRAINT _services_v_version_process_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public._services_v(id) ON DELETE CASCADE;


--
-- Name: homepage_about_body homepage_about_body_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_about_body
    ADD CONSTRAINT homepage_about_body_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: homepage_hero_badges homepage_hero_badges_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_hero_badges
    ADD CONSTRAINT homepage_hero_badges_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: homepage homepage_hero_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage
    ADD CONSTRAINT homepage_hero_image_id_media_id_fk FOREIGN KEY (hero_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: homepage homepage_hero_video_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage
    ADD CONSTRAINT homepage_hero_video_id_media_id_fk FOREIGN KEY (hero_video_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: homepage_locales homepage_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_locales
    ADD CONSTRAINT homepage_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: homepage_process homepage_process_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_process
    ADD CONSTRAINT homepage_process_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: homepage_stats homepage_stats_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_stats
    ADD CONSTRAINT homepage_stats_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: homepage_why homepage_why_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.homepage_why
    ADD CONSTRAINT homepage_why_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.homepage(id) ON DELETE CASCADE;


--
-- Name: industries_considerations industries_considerations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_considerations
    ADD CONSTRAINT industries_considerations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.industries(id) ON DELETE CASCADE;


--
-- Name: industries industries_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: industries_intro industries_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_intro
    ADD CONSTRAINT industries_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.industries(id) ON DELETE CASCADE;


--
-- Name: industries_locales industries_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_locales
    ADD CONSTRAINT industries_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.industries(id) ON DELETE CASCADE;


--
-- Name: industries_offerings industries_offerings_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries_offerings
    ADD CONSTRAINT industries_offerings_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.industries(id) ON DELETE CASCADE;


--
-- Name: insights insights_cover_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights
    ADD CONSTRAINT insights_cover_id_media_id_fk FOREIGN KEY (cover_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: insights_locales insights_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.insights_locales
    ADD CONSTRAINT insights_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.insights(id) ON DELETE CASCADE;


--
-- Name: media_locales media_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media_locales
    ADD CONSTRAINT media_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: navigation_locales navigation_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.navigation_locales
    ADD CONSTRAINT navigation_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.navigation(id) ON DELETE CASCADE;


--
-- Name: partners_credentials partners_credentials_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_credentials
    ADD CONSTRAINT partners_credentials_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: partners_locales partners_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_locales
    ADD CONSTRAINT partners_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: partners_memberships partners_memberships_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners_memberships
    ADD CONSTRAINT partners_memberships_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: partners partners_photo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_photo_id_media_id_fk FOREIGN KEY (photo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_industries_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_industries_fk FOREIGN KEY (industries_id) REFERENCES public.industries(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_insights_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_insights_fk FOREIGN KEY (insights_id) REFERENCES public.insights(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_locked_documents(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_partners_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_partners_fk FOREIGN KEY (partners_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_resources_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_resources_fk FOREIGN KEY (resources_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_sectors_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_sectors_fk FOREIGN KEY (sectors_id) REFERENCES public.sectors(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_services_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_services_fk FOREIGN KEY (services_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_preferences(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: resources_faq resources_faq_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_faq
    ADD CONSTRAINT resources_faq_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: resources_locales resources_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_locales
    ADD CONSTRAINT resources_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: resources_sections_body resources_sections_body_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections_body
    ADD CONSTRAINT resources_sections_body_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources_sections(id) ON DELETE CASCADE;


--
-- Name: resources_sections_list resources_sections_list_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections_list
    ADD CONSTRAINT resources_sections_list_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources_sections(id) ON DELETE CASCADE;


--
-- Name: resources_sections resources_sections_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sections
    ADD CONSTRAINT resources_sections_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: resources_sources resources_sources_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources_sources
    ADD CONSTRAINT resources_sources_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.resources(id) ON DELETE CASCADE;


--
-- Name: sectors_considerations sectors_considerations_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_considerations
    ADD CONSTRAINT sectors_considerations_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.sectors(id) ON DELETE CASCADE;


--
-- Name: sectors_intro sectors_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_intro
    ADD CONSTRAINT sectors_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.sectors(id) ON DELETE CASCADE;


--
-- Name: sectors_locales sectors_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_locales
    ADD CONSTRAINT sectors_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.sectors(id) ON DELETE CASCADE;


--
-- Name: sectors_offerings sectors_offerings_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sectors_offerings
    ADD CONSTRAINT sectors_offerings_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.sectors(id) ON DELETE CASCADE;


--
-- Name: services_deliverables services_deliverables_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_deliverables
    ADD CONSTRAINT services_deliverables_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_faq services_faq_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_faq
    ADD CONSTRAINT services_faq_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_for_who services_for_who_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_for_who
    ADD CONSTRAINT services_for_who_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_includes services_includes_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_includes
    ADD CONSTRAINT services_includes_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_intro services_intro_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_intro
    ADD CONSTRAINT services_intro_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_locales services_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_locales
    ADD CONSTRAINT services_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: services_process services_process_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services_process
    ADD CONSTRAINT services_process_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.services(id) ON DELETE CASCADE;


--
-- Name: site_settings_locales site_settings_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.site_settings_locales
    ADD CONSTRAINT site_settings_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.site_settings(id) ON DELETE CASCADE;


--
-- Name: users_sessions users_sessions_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict JUzj9FaP9XTJYj8vpfyhlOCm0k0tJJM28Pf0OhSrV8n8jIiasm8r2ZtaFmlK2L0

