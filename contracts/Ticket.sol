// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IERC5192.sol";

contract Ticket is ERC1155, IERC5192, Ownable {
    // constructor(string memory uri) ERC1155(uri) {}
    constructor(address initialOwner) ERC1155("ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json") Ownable(initialOwner) {}

    // Mapping from token ID to locked status
    mapping(uint256 => bool) _locked;

    // /// @notice Emitted when the locking status is changed to locked.
    // /// @dev If a token is minted and the status is locked, this event should be emitted.
    // /// @param tokenId The identifier for a token.
    // event Locked(uint256 tokenId);

    // /// @notice Emitted when the locking status is changed to unlocked.
    // /// @notice currently SBT Contract does not emit Unlocked event
    // /// @dev If a token is minted and the status is unlocked, this event should be emitted.
    // /// @param tokenId The identifier for a token.
    // event Unlocked(uint256 tokenId);

    /// @notice Returns the locking status of an Soulbound Token
    /// @dev SBTs assigned to zero address are considered invalid, and queries
    /// about them do throw.
    /// @param tokenId The identifier for an SBT.
    function locked(uint256 tokenId) external view returns (bool) {
        // require(_ownerOf(tokenId) != address(0));
        require(msg.sender != address(0));
        return _locked[tokenId];
    }

    // function _ownerOf(uint256 tokenId) internal view returns (bool) {
    //     return balanceOf(msg.sender, tokenId) != 0;
    // }

    function mint(address to, uint256 tokenId) public {
    // function mint(address to, uint256 tokenId, string memory uri) public {
        require(balanceOf(to, tokenId) == 0, "MNT01");
        require(_locked[tokenId] != true, "MNT02");

        _locked[tokenId] = true;
        emit Locked(tokenId);

        // _setURI(uri);

        _mint(to, tokenId, 1, "");
    }

    function mintBatch(address to, uint256[] memory tokenIds) public {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(balanceOf(to, tokenIds[i]) == 0, "MNT01");
            require(_locked[tokenIds[i]] != true, "MNT02");
            _locked[tokenIds[i]] = true;
            emit Locked(tokenIds[i]);
        }
        _mintBatch(to, tokenIds, new uint256[](tokenIds.length), "");
    }

    // modifier IsTransferAllowed(uint256 tokenId) {
    //     require(!_locked[tokenId]);
    //     _;
    // }

    // function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes memory data) public virtual override IsTransferAllowed(id) {
    //     super.safeTransferFrom(from, to, id, value, data);
    // }

}
