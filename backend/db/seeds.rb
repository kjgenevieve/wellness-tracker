# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Physical
q1 = Question.create(category: "physical", number: 1, text: "I eat a balanced, nutritional diet.")
q2 = Question.create(category: "physical", number: 2, text: "I exercise at least three times a week.")
q3 = Question.create(category: "physical", number: 3, text: "I take responsibility for my physical health.")
q4 = Question.create(category: "physical", number: 4, text: "I am generally free from illness.")
q5 = Question.create(category: "physical", number: 5, text: "I have annual check-ups and specific medical checks as prescribed.")
q6 = Question.create(category: "physical", number: 6, text: "If at all, I use tobacco, alcohol, or prescribed drugs responsibly and moderately.")

#Financial
q7 = Question.create(category: "financial", number: 7, text: "I live within my means and take responsibility for my financial decisions.")
q8 = Question.create(category: "financial", number: 8, text: "My spending and saving habits reflect my values and beliefs.")
q9 = Question.create(category: "financial", number: 9, text: "I actively plan for periods in my life when I may not have income.")
q10 = Question.create(category: "financial", number: 10, text: "I pay bills on time and positively manage credit.")
q11 = Question.create(category: "financial", number: 11, text: "I balance present-day spending with saving for the future.")
q12 = Question.create(category: "financial", number: 12, text: "I have similar financial beliefs and practices as those with whom I am close.")

#Intellectual
q13 = Question.create(category: "intellectual", number: 13, text: "I enjoy learning new skills and information.")
q14 = Question.create(category: "intellectual", number: 14, text: "I have positive thoughts (low degree of negativity & cynicism).")
q15 = Question.create(category: "intellectual", number: 15, text: "I am generally satisfied with my vocation/major.")
q16 = Question.create(category: "intellectual", number: 16, text: "I commit time and energy to professional growth and self-development.")
q17 = Question.create(category: "intellectual", number: 17, text: "My work is stimulating, rewarding, and reflects my values.")
q18 = Question.create(category: "intellectual", number: 18, text: "I pursue mentally stimulating interests and hobbies.")

#Emotional
q19 = Question.create(category: "emotional", number: 19, text: "I have a sense of control in my life and am able to adapt to change.")
q20 = Question.create(category: "emotional", number: 20, text: "I perceive “problems” as opportunities for growth.")
q21 = Question.create(category: "emotional", number: 21, text: "I am able to comfort or console myself when I am troubled.")
q22 = Question.create(category: "emotional", number: 22, text: "I have a sense of fun and can laugh at myself.")
q23 = Question.create(category: "emotional", number: 23, text: "Others would describe me as emotionally stable.")
q24 = Question.create(category: "emotional", number: 24, text: "I believe I am responsible for my feelings and how I express them.")

#Social
q25 = Question.create(category: "social", number: 25, text: "I have at least three people with whom I have a close, trusting relationship.")
q26 = Question.create(category: "social", number: 26, text: "I am able to resolve conflicts in all areas of my life.")
q27 = Question.create(category: "social", number: 27, text: "I have satisfying social interactions with others.")
q28 = Question.create(category: "social", number: 28, text: "I am aware and able to set and respect my own and others’ boundaries.")
q29 = Question.create(category: "social", number: 29, text: "I am aware of the feelings of others and can respond appropriately.")
q30 = Question.create(category: "social", number: 30, text: "I have a sense of belonging to a group or within organizations.")

#Spiritual
q31 = Question.create(category: "spiritual", number: 31, text: "I have a sense of meaning and purpose in my life.")
q32 = Question.create(category: "spiritual", number: 32, text: "I have a general sense of serenity.")
q33 = Question.create(category: "spiritual", number: 33, text: "I am happy with the beliefs I hold.")
q34 = Question.create(category: "spiritual", number: 34, text: "I practice prayer, meditation, or engage in some type of reflective growth.")
q35 = Question.create(category: "spiritual", number: 35, text: "Principles/ethics/morals provide guides for my life.")
q36 = Question.create(category: "spiritual", number: 36, text: "I trust others and am able to forgive others and myself.")