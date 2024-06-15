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
    { id: 4, name: "DBMS" },
    { id: 5, name: "Cloud" } 
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
          { id: 1, name: "Java", color: "red", logo: "java", logoColor: "white", level: "Advanced" },
          { id: 2, name: "Python", color: "blue", logo: "python", logoColor: "white", level: "Expert" },
          { id: 3, name: "Kotlin", color: "purple", logo: "kotlin", logoColor: "white", level: "Advanced" },
          { id: 4, name: "JavaScript", color: "yellow", logo: "javascript", logoColor: "black", level: "Intermediate" },
          { id: 5, name: "HTML", color: "orange", logo: "html5", logoColor: "white", level: "Intermediate" },
          { id: 6, name: "CSS", color: "blue", logo: "css3", logoColor: "white", level: "Intermediate" }
        ];
      case "IDE & Tools":
        return [
          { id: 1, name: "Git", color: "red", logo: "git", logoColor: "white", level: "Advanced" },
          { id: 2, name: "GitHub", color: "black", logo: "github", logoColor: "white", level: "Expert" },
          { id: 3, name: "Postman", color: "orange", logo: "postman", logoColor: "white", level: "Expert" },
          { id: 4, name: "IntelliJ IDEA", color: "blue", logo: "intellijidea", logoColor: "white", level: "Expert" },
          { id: 5, name: "Visual Studio", color: "blue", logo: "visualstudio", logoColor: "white", level: "Advanced" },
          { id: 6, name: "PyCharm", color: "green", logo: "pycharm", logoColor: "white", level:  "Advanced" },
          { id: 7, name: "Notion", color: "black", logo: "notion", logoColor: "white", level: "Expert" },
          { id: 8, name: "Figma", color: "purple", logo: "figma", logoColor: "white", level: "Intermediate" },
          { id: 9, name: "Slack", color: "purple", logo: "slack", logoColor: "white", level: "Intermediate" }
        ];
      case "Framework":
        return [
          { id: 1, name: "Spring", color: "green", logo: "spring", logoColor: "white", level: "Advanced" },
          { id: 2, name: "Spring Boot", color: "green", logo: "springboot", logoColor: "white", level: "Expert" },
          { id: 3, name: "React", color: "blue", logo: "react", logoColor: "white", level: "Intermediate" },
          { id: 4, name: "Jetpack Compose", color: "blue", logo: "jetpackcompose", logoColor: "white", level: "Advanced" }
        ];
      case "DBMS":
        return [
          { id: 1, name: "MariaDB", color: "blue", logo: "mariadb", logoColor: "white", level: "Advanced" },
          { id: 2, name: "MySQL", color: "blue", logo: "mysql", logoColor: "white", level: "Advanced" },
          { id: 3, name: "PostgreSQL", color: "blue", logo: "postgresql", logoColor: "white", level: "Intermediate" }
        ];
      case "Cloud":
        return [
          { id: 1, name: "AWS EC2", color: "orange", logo: "aws", logoColor: "white", level: "Advanced" },
          { id: 2, name: "AWS RDS", color: "orange", logo: "aws", logoColor: "white", level: "Advanced" },
          { id: 3, name: "AWS S3", color: "orange", logo: "aws", logoColor: "white", level: "Advanced" }
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
