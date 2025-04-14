import {defineQuery} from 'next-sanity'

export const EVENTS_QUERY = defineQuery(`*[
    _type == "event"
    && defined(slug.current)
  ]{_id, name, slug, date}|order(date desc)`);

export const EVENT_QUERY = defineQuery(`*[
  _type == "event" &&
  slug.current == $slug
][0]{
...,
"date": coalesce(date, now()),
"doorsOpen": coalesce(doorsOpen, 0),
headline->,
venue->
}`);

