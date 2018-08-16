package space.qmen.leaf.domain;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Plan {
    private Long id;
    private Long courseId;
    private String courseName;
    private String classNames;
    private Long tchId;
    private String tchName;
    private String tchTitle;
    private int stuNum;
    private String examMethod;
    private String startStopCycle;
    private String hours;
    private int totalHours;
    private int weekHours;
    private int credit;
    private int theoreticalHours;
    private int experimentalHours;
    private Long semesterId;
    private Long yearId;
    private int status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getClassNames() {
        return classNames;
    }

    public void setClassNames(String classNames) {
        this.classNames = classNames;
    }

    public Long getTchId() {
        return tchId;
    }

    public void setTchId(Long tchId) {
        this.tchId = tchId;
    }

    public String getTchName() {
        return tchName;
    }

    public void setTchName(String tchName) {
        this.tchName = tchName;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getTchTitle() {
        return tchTitle;
    }

    public void setTchTitle(String tchTitle) {
        this.tchTitle = tchTitle;
    }

    public int getStuNum() {
        return stuNum;
    }

    public void setStuNum(int stuNum) {
        this.stuNum = stuNum;
    }

    public String getExamMethod() {
        return examMethod;
    }

    public void setExamMethod(String examMethod) {
        this.examMethod = examMethod;
    }

    public String getStartStopCycle() {
        return startStopCycle;
    }

    public void setStartStopCycle(String startStopCycle) {
        this.startStopCycle = startStopCycle;
    }

    public int getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(int totalHours) {
        this.totalHours = totalHours;
    }

    public int getWeekHours() {
        return weekHours;
    }

    public void setWeekHours(int weekHours) {
        this.weekHours = weekHours;
    }

    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    public int getTheoreticalHours() {
        return theoreticalHours;
    }

    public void setTheoreticalHours(int theoreticalHours) {
        this.theoreticalHours = theoreticalHours;
    }

    public int getExperimentalHours() {
        return experimentalHours;
    }

    public void setExperimentalHours(int experimentalHours) {
        this.experimentalHours = experimentalHours;
    }

    public Long getSemesterId() {
        return semesterId;
    }

    public void setSemesterId(Long semesterId) {
        this.semesterId = semesterId;
    }

    public Long getYearId() {
        return yearId;
    }

    public void setYearId(Long yearId) {
        this.yearId = yearId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
