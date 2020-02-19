class Show < ApplicationRecord
    has_and_belongs_to_many :fans
    has_many :memories
    belongs_to :show_date
    has_and_belongs_to_many :songs
    belongs_to :venue
    # belongs_to :year
    
    # FUTURE REFACTOR SHOULD RETURN THIS AS AN ARRAY
    def add_set_one(set_one)
        set1_text = ""
        if set_one
            set_one[:tracks].each do |s|
                set1_text += "#{s[:title]}, "
            end
           self.set1 = set1_text
           binding.pry
        end
    end

    def add_set_two(set_two)
        binding.pry
        set2_text = ""
        if set_two
            set_two[:tracks].each do |s|
                set2_text += "#{s[:title]}, "
            end
        else
            set2_text = "No 2nd Set"
        end
        self.set2 = set2_text
        binding.pry
    end

    def add_set_three(set_three)
        binding.pry
        set3_text = ""
        if set_three
            set_three[:tracks].each do |s|
                set3_text += "#{s[:title]}, "
            end
           self.set3 = set3_text
        else
            self.set3 = "No 3rd Set"
        end
    end

    def add_encore(set_encore)
        binding.pry
        encore_text = ""
        if set_encore
            set_encore[:tracks].each do |s|
                encore_text += "#{s[:title]}, "
            end
            self.set_encore = encore_text
        else
            self.set_encore = ""
        end
    end

end
