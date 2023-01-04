# puts "Seeding data..."
# QuizQuestion.create(
#     question: "Breakfast for dinner, or dinner for breakfast?",
#     options: [
#         "Breakfast for dinner.",
#         "Pass me a steak! Dinner for breakfast!",
#         "Neither. Yuck!"
#     ]
# )
# QuizQuestion.create(
#     question: "Would you take a trip to the future or the past?",
#     options: [
#         "Past! Take me back!",
#         "Future! What could lie ahead?",
#         "I like to live in the present moment."
#     ]
# )
# QuizQuestion.create(
#     question: "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
#     options: [
#         "Heck yea!",
#         "No way. You couldn't pay me enough.",
#         "Aliens don't exist."
#     ]
# )
# QuizQuestion.create(
#     question: "Would you rather be the smartest person in the world? Or the richest?",
#     options: [
#         "Smartest",
#         "Richest",
#         "I'd prefer not to answer."
#     ]
# )
# QuizQuestion.create(
#     question: "Teleportation or flying?",
#     options: [
#         "I'm soaring, flying!",
#         "Teleportation. Now you see me, now you don't.",
#         "Yeah, I don't care."
#     ]
# )
# QuizQuestion.create(
#     question: "You have an exam tomorrow but you ran out of time to study. Do you...",
#     options: [
#         "Sit next to the most studious person in the class and cheat?",
#         "Fail and try again next time?",
#         "Scoff because that would never happen to you?"
#     ]
# )
# QuizQuestion.create(
#     question: "Cats or dogs?",
#     options: [
#         "Cats!",
#         "Dogs!",
#         "How could you make me choose?"
#     ]
# )
# QuizQuestion.create(
#     question: "A human hand extends out of a toilet! What would you do?",
#     options: [
#         "Scream and run.",
#         "Close the lid without a word.",
#         "Shake hands with it."
#     ]
# )
# QuizQuestion.create(
#     question: "The road forks to the right and left. You are told there is treasure on the right. What do you do?",
#     options: [
#         "Instantly go to the right.",
#         "It's a trap! Go left!",
#         "Choose either side."
#     ]
# )
# QuizQuestion.create(
#     question: "Do you think you are cool? Be honest.",
#     options: [
#         "Yes.",
#         "No.",
#         "Maybe."
#     ]
# )
# puts "Done seeding!"

# require 'uri'
# require 'net/http'
# require 'openssl'
# require 'pry'

# puts "seeding submarinecablemap"
# url = URI("https://www.submarinecablemap.com/api/v3/cable/cable-geo.json")
# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# ### Fetch request
# request = Net::HTTP::Get.new(url)
# request["accept"] = "application/json"
# ### Response
# response = http.request(request)
# response_hash = JSON.parse(response.read_body)
# ## Create SubmarineCable instances ##
# response_hash["features"].map do |feature| 
#     SubmarineCable.create(
#         name: feature["properties"]["name"],
#         color: feature["properties"]["color"],
#         feature_id: feature["properties"]["feature_id"],
#         coordinates: feature["properties"]["coordinates"]
#     )
# end
# "fetch successful"

# puts "Done seeding submarinecablemap"

puts "seeding Story"

StoryCard.create(
    content: "In the year 2073, vile corporations rule the world. Motivated by greed and power, these corporations control data and information to manipulate people all over the world."
)

StoryCard.create(
    content: "Humans no longer use their physical bodies to interact. Now, the average person begins life as a Bit, a logical state with one of two possible values – “0” or “1”. Meanwhile, ruling corporations have the resources to travel as big as a terabyte. This divide continues to trouble the masses, causing rifts in social circles and stirring global politics."    
)

StoryCard.create(
    content: "There is a silver lining. While antiquated, telecommunication cables that lie at the bottom of the ocean can carry digital data like Bits. As a mere Bit, you do not have any money or resources, but you can freely communicate and stealthily meet with others across the globe by traveling on these cables."
)

StoryCard.create(
    content: "Your mission in this game is to gather seven other Bits - regardless of their binary value - to join your band and become a Byte. In order to survive, you must build a community with others to rise up against the tyrants."    
)

StoryCard.create(
    content: "Welcome to a bit of life."
)

puts "done seeding story cards"