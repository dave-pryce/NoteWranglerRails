# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Note.delete_all

Notes = Note.create ([
     {title: "Soccer", category_id:"1", user_id: "1", description: "Aka Football", content: "Aliquam efficitur quam a sem dictum, eu molestie nulla molestie. Nunc convallis dapibus urna, quis pharetra nulla efficitur non. Donec nunc nulla, malesuada in quam venenatis, porta suscipit nibh. Vestibulum nec convallis lectus, ut ultrices mauris. Pellentesque facilisis ante orci, vitae dictum enim sodales eu. Nullam finibus, mauris eu auctor convallis, odio nisl luctus diam, id efficitur augue eros in ex. In leo felis, molestie a condimentum ac, eleifend a nibh. Sed feugiat facilisis tincidunt. Fusce convallis ornare nunc, non vestibulum erat mattis vel. Cras a ligula non mauris dapibus ullamcorper vel in velit." },
     {title: "Awesome Book",category_id:"2", user_id: "2", description: "This is a greeat book abount bikes.", content: "Ut a turpis odio. Pellentesque volutpat consectetur ante varius ultricies. Maecenas luctus diam turpis, sed tincidunt mi posuere sit amet. Donec eros leo, tempor quis finibus sit amet, tristique quis sapien. Nam varius accumsan fringilla. Duis ornare finibus metus eu aliquet. Etiam in viverra risus. Sed accumsan ipsum quis lobortis efficitur. Integer eu ipsum vel nulla suscipit tincidunt at nec metus. Vivamus sed ligula vel nisi ultricies interdum. Ut aliquam, ante sed imperdiet ultrices, ante turpis ultrices felis, a interdum erat est non magna." },
     {title: "Coding", category_id:"3", user_id: "3", description: "Coding is a greate thing to know SQL, HTML, CSS, JavaScript and the frameworks.", content: "In non volutpat ex. Etiam semper eros non lectus iaculis vehicula. Mauris tincidunt faucibus dui, non dapibus nibh pellentesque interdum. Nulla lorem felis, posuere in pharetra ac, varius quis metus. Sed a pharetra felis. Praesent dolor ante, suscipit id metus nec, cursus hendrerit urna. Pellentesque." },
  ])


User.delete_all

Users = User.create ([
     {name: "J Smith", bio: "Etiam in viverra risus. Sed accumsan ipsum quis lobortis efficitur. Integer eu ipsum vel nulla suscipit tincidunt at nec metus.", site: "www.notreal.com", email: "test@test1.com"},
     {name: "P Jones", bio: "Ut aliquam, ante sed imperdiet ultrices, ante turpis ultrices felis, a interdum erat est non magna.", site: "www.notreal2.com"},
     {name: "A Right", bio: "Sed feugiat facilisis tincidunt. Fusce convallis ornare nunc, non vestibulum erat mattis vel.", site: "www.notreal3.com"},
     ])



Category.delete_all

Categories = Category.create ([
     {name: "Sport", description: "Sport related notes."},
     {name: "Literature", description: "It's all about books" },
     {name: "Hobbies", description: "Other non-sport related activities"},
     ])