<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>멤버 목록</title>
</head>
<body>
<h1>멤버 목록 5-2</h1>
<p><a href='add'>새회원 jsp - (add @GET)</a></p>
<p><a href='../../member/form.html'>새회원 html</a></p>
<table border='1'>
<tr>
    <th>아이디</th><th>이메일</th>
</tr>

<c:forEach items="${list}" var="member">
<tr>
    <td><a href='view?id=${member.getId()}'>${member.id}</a></td>
    <td>${member.email}</td>
</tr>
</c:forEach>


</table>
</body>
</html>