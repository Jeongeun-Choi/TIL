# Sequelize 이용
자바스크립트에서 SQL문을 사용하지 않고 테이블 관리 및 생성이 가능하다.
쌩 쿼리문을 쓰면 코드가 막 몇천줄 넘어가는데 이걸 효율적으로 관리하려면 Sequelize나 Knel? 그걸 사용해서 관리한다고 한다. 

대충 보면
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nickname: {
            type: DataTypes.STRING(20), DataTypes.TEXT => 매우 긴 글
            allowNull: false,  //필수
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,   //고유한 값
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', //한글이 저장된다
    });

    User.associate = (db) => {
        db.User.hasMany(db.Post, {as: 'Posts'}); //구별하게 만든다
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings'});
    };

    return User;
};
형식으로 테이블을 만든다.

여기서 charset: 'ustf8mb4'를 쓰면 한글+이모티콘 사용 가능
associate에 db.Post.belongsTo(db.User); 라고 작성하면 
belongsTo가 있는 테이블에 다른 테이블의 id를 저장한다.(Post 테이블에 UserId 저장)
belongsToMany는 다대다 관계일때 through: ~~ 작성하여 중간 테이블을 만들어 준다. 
as를 이용하여 테이블 별칭? 을 만들어 구별하게 만든다. 

# REST API 
app.get('/', (req, res) => {    //'/'은 로컬호스트 뒤에 붙는 주소! 프론트에서 이쪽 서버에 요청을 하면 'Hello server'라고 응답해줌
    res.send('Hello, server');
});

app.listen(3065, ()=>{
    console.log('server is running on http://localhost:3065');
}); => 3065 포트에 연결

REST API엔 GET, POST, PUT, PATCH, DELETE 가 있음
나머지는 자고일어나서할랭