class Tour {
    constructor({
      id = 'id',
      title = 'title',
      slug = 'slug',
      description = 'description',
      isActive = true,
      createdAt = 'None',
      updatedAt = 'None',
    } = {}) {
      this.id = id;
      this.title = title;
      this.slug = slug;
      this.description = description;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(tour) {
      const { id, title, slug, description, isActive, createdAt, updatedAt } = tour;
      return { id, title, slug, description, isActive, createdAt, updatedAt };
    }
  }
  
  module.exports = Tour
;
  