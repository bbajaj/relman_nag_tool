
create table if not exists list_templates (
  id integer primary key autoincrement,
  template_title string not null,
  template_body string not null
);


create table if not exists queries (
  id integer primary key autoincrement,
  query_name string not null,
  query_channel string not null,
  query_url string not null
);