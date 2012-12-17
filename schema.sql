drop table if exists list_templates ;
create table list_templates (
  id integer primary key autoincrement,
  template_title string not null,
  template_body string not null
);

drop table if exists queries ;
create table queries (
  id integer primary key autoincrement,
  query_name string not null,
  query_channel string not null,
  query_url string not null
);