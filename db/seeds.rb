# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Note.delete_all

Notes = Note.create ([
     {title: "title blah", content: "content blah" },
     {title: "title blah 2", content: "content blah2" },
     {title: "title blah 3", content: "content blah3" },
     {title: "title blah 4", content: "content blah4" },
     {title: "title blah 5", content: "content blah5" },
     {title: "title blah 6", content: "content blah6" },
     {title: "title blah 7", content: "content blah7" },
     {title: "title blah 8", content: "content blah8" }
	])