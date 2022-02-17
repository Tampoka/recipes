import React from 'react';
import Fetch from '../FetchingUser/Fetch';
import RepoMenu from './RepoMenu';

const UserRepositories = ({login, selectedRepo, onSelect = f => f}) => {
    console.log(`selectedRepo - ${selectedRepo}`)
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({data}) => (
                <RepoMenu
                    repositories={data}
                    selectedRepo={selectedRepo}
                    onSelect={onSelect}
                />
            )}
        />
    );
};

export default UserRepositories;