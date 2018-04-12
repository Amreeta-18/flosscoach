class Topic < ApplicationRecord
  belongs_to :forum
  has_many :messages
  serialize :tags
  validate :validate_tags
  belongs_to :user
  validates_presence_of :forum
  validates_presence_of :user

  def project
    forum.project
  end

  def messages_count
    messages.count
  end

  def recent?
    created_at > 2.day.ago
  end
  
  #private
  #def validate_tags
    #if tags.length != tags.uniq.length
     # errors.add(:tags, " have repeated elements")
    #end
  #end

  private
  def validate_tags
    
    if !tags.nil? && !tags.empty?
      if tags.length != tags.uniq.length
        errors.add(:tags, " have repeated elements")
      end
    end
    
  end
end
