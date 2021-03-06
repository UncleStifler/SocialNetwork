import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "./Users.module.css";
import {UsersType} from "../../api/users-api";
import {NavLink} from "react-router-dom";


export type UsersBodyType = {
    items: UsersType[]
    followUnfollowHandler: (userId: number, value: boolean) => void
    followingInProgress: any
}

export const UsersBody = (props: UsersBodyType) => {

    const {items, followUnfollowHandler, followingInProgress} = props

    return (
        <>
            {items.map(userT => {
                return (
                    <Container className="container-sm "
                               key={userT.id}>
                        <Row className="justify-content-center m-5">
                            <Col className="col col-lg-2 bg-light">
                                <NavLink to={`/profilePage/${userT.id}`}>

                                    <img
                                        src={userT.photos.small !== null ? userT.photos.small : 'http://sociala.uitheme.net/assets/images/user-8.png'}
                                        alt="avatar"
                                        className={styles.userPhoto}/>
                                </NavLink>
                            </Col>
                            <Col className={`col col-lg-2 bg-light ${styles.userInfo}`}>
                                {userT.name}
                                {userT.status}
                            </Col>
                            <Col className="col col-lg-2 bg-light justify-content-center ">
                                <Button
                                    disabled={followingInProgress.some((id: number) => id === userT.id)}
                                    className={`mt-3 `}
                                    variant="outline-primary"
                                    onClick={() => followUnfollowHandler(userT.id, userT.followed)}>
                                    {!userT.followed ? "FOLLOW" : "UNFOLLOW"}
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    );
};
