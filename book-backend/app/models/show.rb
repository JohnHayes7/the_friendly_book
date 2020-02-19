class Show < ApplicationRecord
    has_and_belongs_to_many :fans
    has_many :memories
    belongs_to :show_date
    has_and_belongs_to_many :songs
    belongs_to :venue
    belongs_to :year
    
    def add_set_one(set_one)
        set1_text = ""
        if set_one
            set_one.each do |s|
                set1_text += "#{s}, "
            end
           self.set1 = set1_text
        end
    end

    def add_set_two(set_two)
        set2_text = ""
        if set_two
            set_two.each do |s|
                set2_text += "#{s}, "
            end
        else
            set2_text = "No 2nd Set"
        end
        self.set2 = set2_text
        
    end

    def add_set_three(set_three)
        set3_text = ""
        if set_three
            set_three.each do |s|
                set3_text += "#{s}, "
            end
           self.set3 = set3_text
        end
    end

    def add_encore(set_encore)
        encore_text = ""
        if set_encore
            set_encore.each do |s|
                encore_text += "#{s}, "
            end
            self.set_encore = encore_text
        else
            self.set_encore = ""
        end
    end

end
