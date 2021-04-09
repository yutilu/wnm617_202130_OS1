CREATE TABLE IF NOT EXISTS `track_202130_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`passowrd` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_202130_users VALUES
(1,'Kane Chang','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.comm/400/810/fff/?text=user1','2020-03-03 07:02:09'),
(2,'Marcy Rivera','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.comm/400/741/fff/?text=user2','2020-02-08 07:49:56'),
(3,'Sheri Montoya','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.comm/400/815/fff/?text=user3','2020-08-24 02:00:33'),
(4,'Adela Mccoy','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.comm/400/740/fff/?text=user4','2021-02-10 05:15:11'),
(5,'Luella Ortega','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.comm/400/743/fff/?text=user5','2020-04-28 11:59:14'),
(6,'Hodge Vance','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.comm/400/802/fff/?text=user6','2021-01-12 08:26:43'),
(7,'Reilly Ashley','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.comm/400/784/fff/?text=user7','2021-02-25 11:34:01'),
(8,'Heather Villarreal','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.comm/400/856/fff/?text=user8','2020-12-01 10:00:47'),
(9,'Jane Reid','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.comm/400/732/fff/?text=user9','2020-10-06 01:27:39'),
(10,'Sherry Frye','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.comm/400/861/fff/?text=user10','2020-09-11 03:06:27');