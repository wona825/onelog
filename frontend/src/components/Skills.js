import { useRef, useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import 'animate.css';

// Skills 컴포넌트는 사용자의 기술 목록을 카테고리별로 표시합니다.
export const Skills = () => {
  // 기술 카테고리와 현재 선택된 카테고리 상태를 관리합니다.
  const [categories, setCategories] = useState([
    { id: 1, name: "Language" },
    { id: 2, name: "IDE & Tools" },
    { id: 3, name: "Framework" },
    { id: 4, name: "DBMS" }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(categories.find(cat => cat.name === "Language"));
  const [skills, setSkills] = useState([]);
  const categoryScrollRef = useRef(null);
  const skillListRefs = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // 선택된 카테고리가 변경될 때 해당 카테고리에 대한 기술 목록을 설정합니다.
  useEffect(() => {
    const skillsForCategory = getSkillsForCategory(selectedCategory.name);
    setSkills(skillsForCategory);
  }, [selectedCategory]);

  // IntersectionObserver를 사용하여 제목과 내용에 애니메이션을 추가합니다.
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
          } else if (entry.target === contentRef.current) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
          }
        } else {
          if (entry.target === titleRef.current) {
            entry.target.classList.remove("animate__animated", "animate__fadeIn");
          } else if (entry.target === contentRef.current) {
            entry.target.classList.remove("animate__animated", "animate__fadeIn");
          }
        }
      });
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }

      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  // 카테고리를 클릭할 때 선택된 카테고리를 업데이트합니다.
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (skillListRefs.current) {
      skillListRefs.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // 카테고리에 따른 기술 목록을 반환합니다.
  const getSkillsForCategory = (categoryName) => {
    switch (categoryName) {
      case "Language":
        return [
          { id: 1, name: "JavaScript", color: "yellow", logo: "javascript", logoColor: "black", level: "Expert" },
          { id: 2, name: "Python", color: "blue", logo: "python", logoColor: "white", level: "Advanced" },
          { id: 3, name: "Java", color: "red", logo: "java", logoColor: "white", level: "Intermediate" },
          { id: 4, name: "C++", color: "purple", logo: "cplusplus", logoColor: "white", level: "Intermediate" },
          { id: 5, name: "C#", color: "blue", logo: "csharp", logoColor: "white", level: "Advanced" },
          { id: 6, name: "Swift", color: "orange", logo: "swift", logoColor: "white", level: "Beginner" },
          { id: 7, name: "Kotlin", color: "purple", logo: "kotlin", logoColor: "white", level: "Beginner" },
          { id: 8, name: "Ruby", color: "red", logo: "ruby", logoColor: "white", level: "Intermediate" },
          { id: 9, name: "PHP", color: "blue", logo: "php", logoColor: "white", level: "Beginner" },
          { id: 10, name: "Go", color: "blue", logo: "go", logoColor: "white", level: "Advanced" }
        ];
      case "IDE & Tools":
        return [
          { id: 1, name: "VS Code", color: "blue", logo: "visualstudiocode", logoColor: "white", level: "Expert" },
          { id: 2, name: "Sublime Text", color: "orange", logo: "sublimetext", logoColor: "white", level: "Advanced" },
          { id: 3, name: "IntelliJ IDEA", color: "red", logo: "intellijidea", logoColor: "white", level: "Intermediate" },
          { id: 4, name: "Eclipse", color: "blue", logo: "eclipseide", logoColor: "white", level: "Beginner" },
          { id: 5, name: "PyCharm", color: "purple", logo: "pycharm", logoColor: "white", level: "Advanced" },
          { id: 6, name: "Xcode", color: "blue", logo: "xcode", logoColor: "white", level: "Intermediate" },
          { id: 7, name: "NetBeans", color: "red", logo: "netbeanside", logoColor: "white", level: "Beginner" },
          { id: 8, name: "Atom", color: "green", logo: "atom", logoColor: "white", level: "Beginner" },
          { id: 9, name: "Vim", color: "green", logo: "vim", logoColor: "white", level: "Intermediate" },
          { id: 10, name: "Emacs", color: "purple", logo: "emacs", logoColor: "white", level: "Beginner" }
        ];
      case "Framework":
        return [
          { id: 1, name: "React", color: "blue", logo: "react", logoColor: "white", level: "Expert" },
          { id: 2, name: "Angular", color: "red", logo: "angular", logoColor: "white", level: "Advanced" },
          { id: 3, name: "Vue.js", color: "green", logo: "vue-dot-js", logoColor: "white", level: "Intermediate" },
          { id: 4, name: "Spring", color: "green", logo: "spring", logoColor: "white", level: "Advanced" },
          { id: 5, name: "Django", color: "green", logo: "django", logoColor: "white", level: "Advanced" },
          { id: 6, name: "Ruby on Rails", color: "red", logo: "rubyonrails", logoColor: "white", level: "Intermediate" },
          { id: 7, name: "Express.js", color: "green", logo: "express", logoColor: "white", level: "Intermediate" },
          { id: 8, name: "Flask", color: "green", logo: "flask", logoColor: "white", level: "Beginner" },
          { id: 9, name: "Laravel", color: "red", logo: "laravel", logoColor: "white", level: "Beginner" },
          { id: 10, name: "ASP.NET", color: "blue", logo: "aspdotnet", logoColor: "white", level: "Advanced" }
        ];
      case "DBMS":
        return [
          { id: 1, name: "MySQL", color: "blue", logo: "mysql", logoColor: "white", level: "Expert" },
          { id: 2, name: "MongoDB", color: "green", logo: "mongodb", logoColor: "white", level: "Advanced" },
          { id: 3, name: "PostgreSQL", color: "blue", logo: "postgresql", logoColor: "white", level: "Intermediate" },
          { id: 4, name: "SQLite", color: "blue", logo: "sqlite", logoColor: "white", level: "Beginner" },
          { id: 5, name: "Microsoft SQL Server", color: "green", logo: "microsoftsqlserver", logoColor: "white", level: "Advanced" },
          { id: 6, name: "Oracle Database", color: "red", logo: "oracledatabase", logoColor: "white", level: "Advanced" },
          { id: 7, name: "Firebase", color: "yellow", logo: "firebase", logoColor: "white", level: "Beginner" },
          { id: 8, name: "Cassandra", color: "green", logo: "apachecassandra", logoColor: "white", level: "Intermediate" },
          { id: 9, name: "Redis", color: "red", logo: "redis", logoColor: "white", level: "Intermediate" },
          { id: 10, name: "DynamoDB", color: "green", logo: "amazondynamodb", logoColor: "white", level: "Beginner" }
        ];
      default:
        return [];
    }
  };

  // 기술 수준에 따라 별 아이콘을 렌더링합니다.
  const renderLevelIcons = (level) => {
    const maxLevel = 4;
    let icons = [];
    let filledStars = 0;

    switch (level) {
      case "Beginner":
        filledStars = 1;
        break;
      case "Intermediate":
        filledStars = 2;
        break;
      case "Advanced":
        filledStars = 3;
        break;
      case "Expert":
        filledStars = 4;
        break;
      default:
        filledStars = 0;
        break;
    }

    for (let i = 0; i < filledStars; i++) {
      icons.push(<FaStar key={i} style={{ color: "#FFCA28" }} />);
    }
    for (let i = filledStars; i < maxLevel; i++) {
      icons.push(<FaRegStar key={i} style={{ color: "#FFCA28" }} />);
    }

    return icons;
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx" ref={titleRef}>
              <h2>Skills</h2>
              <div className="skill-content" ref={contentRef}>
                <div className="skill-category">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                      style={{
                        color: selectedCategory === category ? "#fff" : "#505152",
                        backgroundColor: selectedCategory === category ? "#5a595b" : "#ecebeb"
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className="skill-list" ref={skillListRefs}>
                  {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-card">
                        <div className="skill-item">
                          <img
                            src={`https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color}.svg?&style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logoColor}`}
                            alt={skill.name}
                          />
                        </div>
                        <div className="skill-level">
                          {renderLevelIcons(skill.level)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
