# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150629093634) do

  create_table "categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
  end

  create_table "notes", force: true do |t|
    t.string   "title"
    t.text     "content",     limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
    t.integer  "user_id"
    t.integer  "category_id"
  end

  add_index "notes", ["category_id"], name: "index_notes_on_category_id"
  add_index "notes", ["user_id"], name: "index_notes_on_user_id"

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "site"
    t.string   "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.string   "password_digest"
  end

end
