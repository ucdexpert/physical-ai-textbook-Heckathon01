# Data Model

## Entities

### Book

The top-level entity that represents the entire Docusaurus site.

**Attributes**:
-   `title`: The title of the book.
-   `tagline`: The tagline of the book.
-   `modules`: A list of modules in the book.

### Module

A collection of chapters, corresponding to a course module.

**Attributes**:
-   `title`: The title of the module.
-   `chapters`: A list of chapters in the module.

### Chapter

A single page of content.

**Attributes**:
-   `title`: The title of the chapter.
-   `content`: The content of the chapter in Markdown/MDX format.
-   `learning_objectives`: A list of learning objectives for the chapter.
-   `content_summary`: A summary of the chapter's content.
-   `key_concepts`: A list of key concepts covered in the chapter.
-   `hands_on_component`: A description of the hands-on component of the chapter.
-   `assessment`: A description of how learning is verified.
