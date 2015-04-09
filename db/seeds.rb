# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Note.delete_all

Notes = Note.create ([
     {title: "Alteration literature ", categories_id:"1", description: "Alteration literature to or an sympathize mr imprudence.", content: "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage. Procuring as in resembled by in agreeable. Next long no gave mr eyes. Admiration advantages no he celebrated so pianoforte unreserved. Not its herself forming charmed amiable. Him why feebly expect future now. " },
     {title: "Simple Fat",categories_id:"2",  description: "Denote simple fat denied add worthy little use.", content: "Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize. " },
     {title: "Started Brother", categories_id:"3", description: "Started earnest brother believe an exposed so.", content: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. " },
     {title: "John",categories_id:"4",  description: "From they fine john he give of rich he.", content: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as. " },
     {title: "Death", categories_id:"1", description: "Death weeks early had their and folly timed put.", content: "Death weeks early had their and folly timed put. Hearted forbade on an village ye in fifteen. Age attended betrayed her man raptures laughter. Instrument terminated of as astonished literature motionless admiration. The affection are determine how performed intention discourse but. On merits on so valley indeed assure of. Has add particular boisterous uncommonly are. Early wrong as so manor match. Him necessary shameless discovery consulted one but. " },
     {title: "Sportsmen",categories_id: "2",  description: "Unwilling sportsmen he in questions september therefore described so.", content: "Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of. Still tried means we aware order among on. Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking. " },
     {title: "Kindness",categories_id:"3",  description: "Kindness to he horrible reserved ye.", content: "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting. " },
     {title: "Vexed",categories_id:"4",  description: "You vexed shy mirth now noise.", content: "You vexed shy mirth now noise. Talked him people valley add use her depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs out. " },
     {title: "Valley",categories_id:"1",  description: "Turned it up should no valley cousin he.", content: "Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one. " },
     {title: "Compliment",categories_id:"2",  description: "Compliment interested discretion estimating on stimulated apartments oh.", content: "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is. Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly. " }
	])


User.delete_all

Users = User.create ([
     {name: "M Mouse", bio:"Squeek, squeek", site: "www.mmouse.mouse"},
     {name: "D Duck", bio:"Quack Quack", site: "www.dduck.duck"},
     {name: "P Sheep", bio:"Baa, Baa", site: "www.baba.sheep"},
     {name: "K Kitten", bio:"Meow Meow", site: "www.cat.cat"},
     {name: "P Dog", bio:"Woof Woof", site: "www.woof.woof"}
     ])



Category.delete_all

Categories = Category.create ([
     {category: "Sport"},
     {category: "Literature"},
     {category: "Hobbies"},
     {category: "Misc"}
     ])