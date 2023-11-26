CREATE TABLE `Visit` (
	`route` varchar(64) NOT NULL,
	`referrer` varchar(64),
	`userId` char(6) NOT NULL,
	`views` int NOT NULL DEFAULT 1,
	`when` datetime(3) NOT NULL DEFAULT current_timestamp(3),
	CONSTRAINT `Visit_route_userId_pk` PRIMARY KEY(`route`,`userId`)
);
