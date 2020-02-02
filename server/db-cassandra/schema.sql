CREATE KEYSPACE bitly WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': 3 };

USE bitly;

CREATE TABLE urls (
  url text,
  alias text,
  title text,
  key text,
  visits int,
  PRIMARY KEY (key)
);