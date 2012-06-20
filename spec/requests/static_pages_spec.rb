require 'spec_helper'

describe "StaticPages" do
  describe "Home page" do
    it "should have the title 'loxopix'" do
      visit root_path
      page.should have_selector('title', text: 'loxopix')
    end
  end
end
