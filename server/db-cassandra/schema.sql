CREATE KEYSPACE IF NOT EXISTS bitly WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 3 };

USE bitly;

DROP TABLE IF EXISTS urls;

CREATE TABLE urls (
  url text,
  alias text,
  title text,
  key text,
  visits int,
  creation_date timestamp,
  expiration_date date,
  PRIMARY KEY (key)
);