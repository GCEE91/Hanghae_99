import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key)? true : false;
  
  console.log(is_session);

  if (is_login && is_session ) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Text margin="0px" size="24px" bold>
            Hello
          </Text>
          <Grid is_flex_end>
            <Button width="60px" margin="0px 5px 0px 0px" _onClick={() => {}}>
              내정보
            </Button>
            <Button width="50px" margin="0px 5px 0px 0px" _onClick={() => {}}>
              알림
            </Button>
            <Button width="60px" _onClick={() => {
              dispatch(userActions.logoutFB({}))
            }}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Text margin="0px" size="24px" bold>
          Hello
        </Text>
        <Grid is_flex_end>
          <Button
            width="60px"
            margin="0px 5px 0px 0px"
            _onClick={() => {
              history.push('/signup');
            }}
          >
            회원가입
          </Button>
          <Button
            width="50px"
            _onClick={() => {
                history.push('/login');
            }}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
