
## 项目开始 2021 6/12


##项目完成 2021 6/19

### 设计题目

实验室预约系统/毕业设计管理系统，二选一完成。  

#### 实验室预约系统
完成一个允许教师灵活预约课程实验时间的实验室预约系统。

**角色**  
实验室管理员  
实验室管理，添加实验室，实验室编号，机器数量，描述(机器配置等)  
教师管理，教师信息的CURD  

教师  
课程实验管理，添加课程名称，学生数量，学时数  
实验室预约  

**需求与设计**  
系统需登陆使用。登陆成功，返回token，每次请求携带，路由至主组件。  
必须拦截未登录请求，路由至登陆组件。登陆功能可后期添加。  
实验时间先占先得。  
18周课，上午2节下午3节共5节计算。  
教师创建若干实验课程，基于课程预约。  
加载实验室时，过滤掉数量小于课程学生数实验室。  
实验环境一般固定，实验每周时间一般固定。很少有第3周1节在901实验，第4周2节在902实验，第5周又改变的情况。  

例如  
以下拉选择实验室，实验室以基于星期的课表样式，显示18周内每星期每1节的占用其情况。
教师基于周次，选择实验时间。一个cell里分行或列显示18个周的复选框   
每门课程包含若干实验时间，实验时间由实验室/周次/星期/节组成。

系统必须提供时间不能冲突的判断  
例如，选择当前实验室时，从所有课程实验时间中，检索出当前实验室不同星期不同节不同周的占用情况，提供给教师选择。
