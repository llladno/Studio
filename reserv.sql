PGDMP         )                 {            postgres    15.3    15.2 2    .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    5    postgres    DATABASE     |   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            2           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3377                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            3           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16481    11    TABLE     E   CREATE TABLE public."11" (
    sdsaasd "char",
    sdsadas "char"
);
    DROP TABLE public."11";
       public         heap    postgres    false            �            1259    16399    customer    TABLE     �   CREATE TABLE public.customer (
    id integer NOT NULL,
    name text NOT NULL,
    mail character varying NOT NULL,
    phone character varying NOT NULL,
    passwd character varying NOT NULL,
    login text
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    16398    Customer_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Customer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Customer_id_seq";
       public          postgres    false    216            4           0    0    Customer_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Customer_id_seq" OWNED BY public.customer.id;
          public          postgres    false    215            �            1259    16442    customer_id_seq    SEQUENCE     �   ALTER TABLE public.customer ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16456    photo    TABLE     j   CREATE TABLE public.photo (
    id integer NOT NULL,
    id_shooting integer NOT NULL,
    photo bytea
);
    DROP TABLE public.photo;
       public         heap    postgres    false            �            1259    16455    photo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.photo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.photo_id_seq;
       public          postgres    false    225            5           0    0    photo_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.photo_id_seq OWNED BY public.photo.id;
          public          postgres    false    224            �            1259    16408 
   photograph    TABLE     �   CREATE TABLE public.photograph (
    id integer NOT NULL,
    name character varying NOT NULL,
    phone character varying NOT NULL,
    mail character varying NOT NULL
);
    DROP TABLE public.photograph;
       public         heap    postgres    false            �            1259    16407    photograph_id_seq    SEQUENCE     �   CREATE SEQUENCE public.photograph_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.photograph_id_seq;
       public          postgres    false    218            6           0    0    photograph_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.photograph_id_seq OWNED BY public.photograph.id;
          public          postgres    false    217            �            1259    16441    photograph_id_seq1    SEQUENCE     �   ALTER TABLE public.photograph ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.photograph_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    16417    shooting    TABLE     �   CREATE TABLE public.shooting (
    id integer NOT NULL,
    id_photographer integer NOT NULL,
    id_user integer NOT NULL,
    date character varying NOT NULL,
    comment character varying NOT NULL,
    day character varying NOT NULL
);
    DROP TABLE public.shooting;
       public         heap    postgres    false            �            1259    16416    shooting_id_seq    SEQUENCE     �   CREATE SEQUENCE public.shooting_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.shooting_id_seq;
       public          postgres    false    220            7           0    0    shooting_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.shooting_id_seq OWNED BY public.shooting.id;
          public          postgres    false    219            �            1259    16438    shooting_id_seq1    SEQUENCE     �   ALTER TABLE public.shooting ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.shooting_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    16469 	   testphoto    TABLE     Q   CREATE TABLE public.testphoto (
    idphoto integer NOT NULL,
    photo bytea
);
    DROP TABLE public.testphoto;
       public         heap    postgres    false            �            1259    16472    testphoto_idphoto_seq    SEQUENCE     �   CREATE SEQUENCE public.testphoto_idphoto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.testphoto_idphoto_seq;
       public          postgres    false    226            8           0    0    testphoto_idphoto_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.testphoto_idphoto_seq OWNED BY public.testphoto.idphoto;
          public          postgres    false    227            �           2604    16459    photo id    DEFAULT     d   ALTER TABLE ONLY public.photo ALTER COLUMN id SET DEFAULT nextval('public.photo_id_seq'::regclass);
 7   ALTER TABLE public.photo ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    16473    testphoto idphoto    DEFAULT     v   ALTER TABLE ONLY public.testphoto ALTER COLUMN idphoto SET DEFAULT nextval('public.testphoto_idphoto_seq'::regclass);
 @   ALTER TABLE public.testphoto ALTER COLUMN idphoto DROP DEFAULT;
       public          postgres    false    227    226            +          0    16481    11 
   TABLE DATA           0   COPY public."11" (sdsaasd, sdsadas) FROM stdin;
    public          postgres    false    228   ,4                 0    16399    customer 
   TABLE DATA           H   COPY public.customer (id, name, mail, phone, passwd, login) FROM stdin;
    public          postgres    false    216   I4       (          0    16456    photo 
   TABLE DATA           7   COPY public.photo (id, id_shooting, photo) FROM stdin;
    public          postgres    false    225   �4       !          0    16408 
   photograph 
   TABLE DATA           ;   COPY public.photograph (id, name, phone, mail) FROM stdin;
    public          postgres    false    218   5       #          0    16417    shooting 
   TABLE DATA           T   COPY public.shooting (id, id_photographer, id_user, date, comment, day) FROM stdin;
    public          postgres    false    220   N5       )          0    16469 	   testphoto 
   TABLE DATA           3   COPY public.testphoto (idphoto, photo) FROM stdin;
    public          postgres    false    226   >6       9           0    0    Customer_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Customer_id_seq"', 1, false);
          public          postgres    false    215            :           0    0    customer_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.customer_id_seq', 7, true);
          public          postgres    false    223            ;           0    0    photo_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.photo_id_seq', 4, true);
          public          postgres    false    224            <           0    0    photograph_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.photograph_id_seq', 1, false);
          public          postgres    false    217            =           0    0    photograph_id_seq1    SEQUENCE SET     @   SELECT pg_catalog.setval('public.photograph_id_seq1', 1, true);
          public          postgres    false    222            >           0    0    shooting_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.shooting_id_seq', 1, false);
          public          postgres    false    219            ?           0    0    shooting_id_seq1    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.shooting_id_seq1', 66, true);
          public          postgres    false    221            @           0    0    testphoto_idphoto_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.testphoto_idphoto_seq', 2, true);
          public          postgres    false    227            �           2606    16406    customer Customer_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customer DROP CONSTRAINT "Customer_pkey";
       public            postgres    false    216            �           2606    16463    photo photo_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.photo
    ADD CONSTRAINT photo_pkey PRIMARY KEY (id_shooting);
 :   ALTER TABLE ONLY public.photo DROP CONSTRAINT photo_pkey;
       public            postgres    false    225            �           2606    16415    photograph photograph_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.photograph
    ADD CONSTRAINT photograph_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.photograph DROP CONSTRAINT photograph_pkey;
       public            postgres    false    218            �           2606    16437    shooting shooting_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.shooting
    ADD CONSTRAINT shooting_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.shooting DROP CONSTRAINT shooting_pkey;
       public            postgres    false    220            �           2606    16480    testphoto testphoto_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.testphoto
    ADD CONSTRAINT testphoto_pkey PRIMARY KEY (idphoto);
 B   ALTER TABLE ONLY public.testphoto DROP CONSTRAINT testphoto_pkey;
       public            postgres    false    226            �           2606    16430    shooting id_photographer    FK CONSTRAINT     �   ALTER TABLE ONLY public.shooting
    ADD CONSTRAINT id_photographer FOREIGN KEY (id_photographer) REFERENCES public.photograph(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public.shooting DROP CONSTRAINT id_photographer;
       public          postgres    false    3206    220    218            �           2606    16464    photo id_shooting    FK CONSTRAINT     �   ALTER TABLE ONLY public.photo
    ADD CONSTRAINT id_shooting FOREIGN KEY (id_shooting) REFERENCES public.shooting(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ;   ALTER TABLE ONLY public.photo DROP CONSTRAINT id_shooting;
       public          postgres    false    3208    225    220            �           2606    16448    shooting id_user    FK CONSTRAINT     �   ALTER TABLE ONLY public.shooting
    ADD CONSTRAINT id_user FOREIGN KEY (id_user) REFERENCES public.customer(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 :   ALTER TABLE ONLY public.shooting DROP CONSTRAINT id_user;
       public          postgres    false    3204    220    216            +      x������ � �         �   x�3�,HL�ɇ����9zE����FFƦ&f��FƜ9��\�P� %��  ��$�����@#<&q� +5ƣԘ˔3/h5P*�e�yaօ}�.N���¾�P��/l��l"�8S3�����p�s^�|���6 3���L!��\1z\\\ �;p�      (      x������ � �      !   *   x�3�0���[/l��6�4�����WT����� :�\      #   �   x�����0E�a
OP��,�!��VZ���D9��m�C����9o[F��L@�k_5�P>^����_�=�g@��l�ȸ<-<����cEL�wM\򲘽�5��kbM�}k⚰-�[�>�'`u����&[�iL֜qd��Iv&��5����L�Y��ggzdr�A ��k) ���Kv�9+Q�o:c��]9:(�u����/W�ч�Z,����8����}��KA� �~��      )   q   x�MNA!:��t"��b���}�bO!�!����������Ȝ��?�*�]��'�|���BP
v�eE��ŰZ),�^�vf�Nqne�y$��sh����o�+�wJ���'�     